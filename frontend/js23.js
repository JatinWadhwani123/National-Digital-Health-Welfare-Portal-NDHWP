document.addEventListener('DOMContentLoaded', function () {
  // Handle tab switching
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetTab = this.getAttribute('data-tab');

      // Remove 'active' from all tabs and content
      tabLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add 'active' to the clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // Handle OTP login
  const sendOtpBtn = document.getElementById('send-otp');
  const otpSection = document.getElementById('otp-section');
  const patientLoginForm = document.getElementById('patient-login-form');

  if (sendOtpBtn && patientLoginForm) {
    sendOtpBtn.addEventListener('click', async function () {
      const mobile = document.getElementById('patient-mobile').value;
      if (!mobile) return alert('Enter your mobile number.');

      try {
        const res = await fetch('http://localhost:5000/api/patient/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile })
        });

        const data = await res.json();
        if (res.ok) {
          alert(data.message);
          otpSection.classList.remove('hidden');
          console.log('Received OTP (for testing):', data.otp); // for development
        } else {
          alert(data.message || 'Failed to send OTP');
        }
      } catch (err) {
        console.error(err);
        alert('Failed to send OTP. Check server connection.');
      }
    });

    patientLoginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const mobile = document.getElementById('patient-mobile').value;
      const otp = document.getElementById('patient-otp').value;

      try {
        const res = await fetch('http://localhost:5000/api/patient/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile, otp })
        });

        const data = await res.json();
        if (res.ok) {
          alert('Login Successful');
          window.location.href = 'patient-dashboard.html';
        } else {
          alert(data.message || 'OTP verification failed');
        }
      } catch (err) {
        console.error(err);
        alert('OTP verification failed');
      }
    });
  }
});
