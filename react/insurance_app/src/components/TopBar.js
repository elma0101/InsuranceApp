import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function TopBar({ toggleSidebar, showToggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/':
        return 'Dashboard';
      case '/suppliers':
        return 'Suppliers';
      case '/contracts':
        return 'Contracts';
      case '/policies':
        return 'Policies';
      default:
        return 'Insurance Management';
    }
  }

  const handleAuthAction = () => {
    if (user) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="top-bar">
      {showToggle && (
        <button className="btn btn-outline-primary me-2" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>
      )}
      <h1 className="page-title">{getPageTitle()}</h1>
      <div>
        <button className="btn btn-outline-primary me-2">
          <i className="bi bi-bell"></i>
        </button>
        <button className="btn btn-outline-primary" onClick={handleAuthAction}>
          {user ? <i className="bi bi-box-arrow-right"></i> : <i className="bi bi-person"></i>}
        </button>
      </div>
    </div>
  );
}

export default TopBar;