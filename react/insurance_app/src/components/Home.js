import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to Our Insurance Management System</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Suppliers</h2>
              <p className="card-text">Manage supplier information.</p>
              <Link to="/suppliers" className="btn btn-primary">View Suppliers</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Contracts</h2>
              <p className="card-text">Manage contract details.</p>
              <Link to="/contracts" className="btn btn-primary">View Contracts</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Policies</h2>
              <p className="card-text">Manage insurance policies.</p>
              <Link to="/policies" className="btn btn-primary">View Policies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
