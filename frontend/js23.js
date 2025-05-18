document.addEventListener('DOMContentLoaded', function () {
  // Tab Switching Logic
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');

      // Remove active classes
      tabLinks.forEach(item => item.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Set active tab and content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Simulate OTP Process for Patient Login
  const sendOtpBtn = document.getElementById('send-otp');
  const otpSection = document.getElementById('otp-section');
  const patientLoginForm = document.getElementById('patient-login-form');

  sendOtpBtn.addEventListener('click', function () {
    const mobileInput = document.getElementById('patient-mobile').value;
    if (mobileInput.trim() === '') {
      alert('Please enter a valid mobile number.');
      return;
    }
    // Simulate sending OTP and reveal OTP input
    alert('OTP sent to ' + mobileInput + '. (Use 123456 for simulation)');
    otpSection.classList.remove('hidden');
  });

  patientLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const otpValue = document.getElementById('patient-otp').value;
    // For simulation, assume OTP is 123456
    if (otpValue === '123456') {
      alert('OTP verified! You are now logged in as a patient.');
      // Implement further actions or redirection here
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });

  // Doctor Login Submission (simulation)
  const doctorLoginForm = document.getElementById('doctor-login-form');
  doctorLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('doctor-username').value;
    const password = document.getElementById('doctor-password').value;
    // Basic validation (replace with real authentication)
    if (username && password) {
      alert('Welcome Dr. ' + username + '! You are now logged in.');
    } else {
      alert('Please enter both username and password.');
    }
  });

  // Admin Login Submission (simulation)
  const adminLoginForm = document.getElementById('admin-login-form');
  adminLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    // Basic validation (replace with real authentication)
    if (username && password) {
      alert('Welcome Admin ' + username + '! You have successfully logged in.');
    } else {
      alert('Please enter both username and password.');
    }
  });
});