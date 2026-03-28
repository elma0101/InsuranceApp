import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="bi bi-shield-check logo-icon"></i>
        <h3 className="logo-text">Insurance Management</h3>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/suppliers" className="nav-link">
            <i className="bi bi-building me-2"></i>
            Suppliers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contracts" className="nav-link">
            <i className="bi bi-file-earmark-text me-2"></i>
            Contracts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/policies" className="nav-link">
            <i className="bi bi-clipboard-check me-2"></i>
            Policies
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;