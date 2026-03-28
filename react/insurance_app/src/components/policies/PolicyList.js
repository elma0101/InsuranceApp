import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fetchPolicies, deletePolicy } from '../../api/api';

function PolicyList() {
  const { user } = useAuth();
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = async () => {
    try {
      setLoading(true);
      const data = await fetchPolicies();
      setPolicies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePolicy(id);
      setPolicies(policies.filter(policy => policy.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Insurance Policies</h2>
      {user.role === 'admin' && (
        <Link to="/policies/new" className="btn btn-primary mb-3">Add New Policy</Link>
      )}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Number</th>
              <th>Label</th>
              <th>Required</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id}>
                <td>{policy.number}</td>
                <td>{policy.label}</td>
                <td>{policy.required ? 'Yes' : 'No'}</td>
                <td>{policy.status}</td>
                <td>{policy.startDate}</td>
                <td>{policy.endDate}</td>
                {user.role === 'admin' && (
                  <td>
                    <Link to={`/policies/edit/${policy.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                    <button onClick={() => handleDelete(policy.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PolicyList;