import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
let confirmationResult;

// Error messages
const ERROR_MESSAGES = {
    'auth/invalid-phone-number': 'Invalid phone number format. Please use +91XXXXXXXXXX',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/code-expired': 'OTP has expired. Please request a new one.',
    'auth/invalid-verification-code': 'Invalid OTP. Please check and try again.',
    'default': 'An error occurred. Please try again.'
};

// Setup Recaptcha with error handling
window.onload = function() {
    try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'normal',
            'callback': (response) => {
                document.getElementById('sendCode').disabled = false;
            },
            'expired-callback': () => {
                showMessage('reCAPTCHA has expired. Please refresh the page.', 'error');
            }
        });
        recaptchaVerifier.render();
    } catch (error) {
        console.error('reCAPTCHA Error:', error);
        showMessage('Error loading reCAPTCHA. Please refresh the page.', 'error');
    }
};

// Validate phone number
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+91\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

// Send OTP with validation
document.getElementById('sendCode').addEventListener('click', async () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (!validatePhoneNumber(phoneNumber)) {
        showMessage('Invalid phone number format. Please use +91XXXXXXXXXX', 'error');
        return;
    }

    try {
        showLoading(true);
        confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('verificationForm').style.display = 'block';
        showMessage('OTP sent successfully!', 'success');
    } catch (error) {
        console.error('Send OTP Error:', error);
        const errorMessage = ERROR_MESSAGES[error.code] || ERROR_MESSAGES.default;
        showMessage(errorMessage, 'error');
        // Reset reCAPTCHA on error
        window.recaptchaVerifier.render().then(widgetId => {
            grecaptcha.reset(widgetId);
        });
    } finally {
        showLoading(false);
    }
});

// Verify OTP with validation
document.getElementById('verifyCode').addEventListener('click', async () => {
    const code = document.getElementById('verificationCode').value;
    
    if (!code || code.length !== 6) {
        showMessage('Please enter a valid 6-digit OTP', 'error');
        return;
    }

    try {
        showLoading(true);
        const result = await confirmationResult.confirm(code);
        showMessage('Verification successful! Redirecting...', 'success');
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('userPhone', result.user.phoneNumber);
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } catch (error) {
        console.error('Verify OTP Error:', error);
        const errorMessage = ERROR_MESSAGES[error.code] || ERROR_MESSAGES.default;
        showMessage(errorMessage, 'error');
    } finally {
        showLoading(false);
    }
});

// Loading indicator
function showLoading(show) {
    const loadingElement = document.getElementById('loading');
    if (show) {
        loadingElement.style.display = 'block';
    } else {
        loadingElement.style.display = 'none';
    }
}

// Message display
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
}
