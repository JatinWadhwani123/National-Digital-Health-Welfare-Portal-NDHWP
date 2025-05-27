const express = require('express');
const router = express.Router();

const otpStore = {}; // In-memory store

// Send OTP
router.post('/send-otp', (req, res) => {
  const { mobile } = req.body;
  if (!mobile) return res.status(400).json({ message: 'Mobile number is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[mobile] = otp;

  console.log(`Generated OTP for ${mobile}: ${otp}`);

  res.json({ message: 'OTP sent successfully', otp }); // You can remove "otp" key in prod
});

// Verify OTP
router.post('/verify-otp', (req, res) => {
  const { mobile, otp } = req.body;
  if (otpStore[mobile] === otp) {
    delete otpStore[mobile];
    res.json({ message: 'OTP verified successfully' });
  } else {
    res.status(401).json({ message: 'Invalid OTP' });
  }
});

module.exports = router;
