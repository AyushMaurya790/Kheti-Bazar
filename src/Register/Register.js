import React, { useState } from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    nickname: '',
    phone: '',
    otp: '',
    password: '',
    referralCode: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage('');
  };

  // Send OTP
  const handleSendOtp = async () => {
    try {
      const res = await axios.post('/api/send-otp', { phone: form.phone });
      setOtpSent(true);
      setMessage('OTP sent successfully ✅');
    } catch (err) {
      setMessage('Failed to send OTP ❌');
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('/api/verify-otp', {
        phone: form.phone,
        otp: form.otp
      });
      if (res.data.success) {
        setOtpVerified(true);
        setMessage('OTP verified ✅');
      } else {
        setMessage('Invalid OTP ❌');
      }
    } catch (err) {
      setMessage('OTP verification failed ❌');
    }
  };

  // Submit registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setMessage('Please verify OTP before registering ❌');
      return;
    }

    try {
      await axios.post('/api/register', form);
      setMessage('Registration successful 🎉');
      navigate('/home');
    } catch (err) {
      setMessage('Registration failed ❌');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <img src="/logo192.png" alt="Logo" className="logo" />
        <h2 className="auth-title">Create Account</h2>

        <input
          type="text"
          name="nickname"
          placeholder="Nickname"
          value={form.nickname}
          onChange={handleChange}
          required
        />

        <div className="phone-input">
          <span>+91</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            disabled={otpSent}
          />
          <button type="button" className="otp-btn" onClick={handleSendOtp} disabled={otpSent}>
            {otpSent ? 'Sent' : 'Send'}
          </button>
        </div>

        {otpSent && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={handleChange}
              required
              disabled={otpVerified}
            />
            <button type="button" className="otp-btn" onClick={handleVerifyOtp} disabled={otpVerified}>
              {otpVerified ? 'Verified' : 'Verify OTP'}
            </button>
          </>
        )}

        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>👁️</button>
        </div>

        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code (Optional)"
          value={form.referralCode}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">Register 🚀</button>
        <p className="switch-auth">Already have an account? <a href="/login">Login</a></p>

        {message && <p style={{ color: message.includes('✅') ? 'green' : 'red', textAlign: 'center' }}>{message}</p>}
      </form>
    </div>
  );
}
