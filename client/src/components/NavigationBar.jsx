import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../assets/navigationBar/NavigationBar.css';

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Brand Logo" className="navbar-logo-image" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/products/pants" className="navbar-link">Quần</Link>
        <Link to="/products/clothes" className="navbar-link">Áo</Link>
        <Link to="/products/hats" className="navbar-link">Mũ</Link>
        <Link to="/products/accessories" className="navbar-link">Phụ kiện</Link>
        <Link to="/about" className="navbar-link">About</Link>
      </div>
      <div className="navbar-user">
        <button onClick={toggleDropdown} className="navbar-user-button">
          {user ? `Hello, ${user.name}` : 'Account'}
        </button>
        {dropdownOpen && (
          <div className="navbar-dropdown">
            {user && (
              <Link to="/profile" className="navbar-dropdown-item">Trang cá nhân</Link>
            )}
            {user && (
              <button onClick={logout} className="navbar-dropdown-item">Đăng xuất</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
