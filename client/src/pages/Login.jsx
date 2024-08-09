import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/login/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Có lỗi xảy ra');
      }

      setSuccess('Đăng nhập thành công!');
      setEmail('');
      setPassword('');
      setError(null);

      // Xử lý token hoặc chuyển hướng sau khi đăng nhập thành công
      console.log('Đăng nhập thành công:', data);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng Nhập</button>
          <a href="/auth/facebook">Đăng nhập bằng Facebook</a>
          <Link to="/forgot-password">Quên mật khẩu</Link>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
      <div className="register-info">
        <p>Bạn chưa có tài khoản? <Link to="/register">Đăng Ký</Link></p>
      </div>
    </div>
  );
};

export default Login;
