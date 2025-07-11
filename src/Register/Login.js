import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/k1.png';

export default function Login() {
  const [form, setForm] = useState({ phone: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
         <img src={logo} alt="Kheti Bazaar Logo" className="kb-logo" />
        <h2 className="auth-title">Login</h2>

        <div className="phone-input">
          <span>+91</span>
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="password-input">
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>👁️</button>
        </div>

        <button type="submit" className="submit-btn">Login</button>
        <p className="switch-auth">Don’t have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}
