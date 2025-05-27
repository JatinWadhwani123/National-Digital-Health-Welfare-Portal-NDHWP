const User = require('../models/User');

// Send OTP
exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;
  const otp = '123456'; // Replace with real OTP generation
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 min expiry

  try {
    const user = await User.findOneAndUpdate(
      { mobile },
      { otp, otpExpires },
      { upsert: true, new: true }
    );

    res.json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const user = await User.findOne({ mobile });

    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }

    res.json({ success: true, message: 'OTP verified. Login successful.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
