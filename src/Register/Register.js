import React, { useState } from 'react';
import '../styles/Register.css';

export default function Register() {
  const [form, setForm] = useState({
    nickname: '',
    phone: '',
    password: '',
    referralCode: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.nickname || !form.phone || !form.password) {
      setMessage('Please fill all required fields ❌');
      return;
    }

    // Optionally save in localStorage (demo only)
    localStorage.setItem('user', JSON.stringify(form));
    setMessage('Registration successful 🎉');

    // Optionally reset the form
    setForm({
      nickname: '',
      phone: '',
      password: '',
      referralCode: ''
    });
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
          />
        </div>

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

        {message && <p style={{ color: message.includes('🎉') ? 'green' : 'red', textAlign: 'center' }}>{message}</p>}
      </form>
    </div>
  );
}
