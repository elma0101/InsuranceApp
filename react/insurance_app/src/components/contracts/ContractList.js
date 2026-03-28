import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fetchContracts, deleteContract } from '../../api/api';

function ContractList() {
  const { user } = useAuth();
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    try {
      setLoading(true);
      const data = await fetchContracts();
      setContracts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContract(id);
      setContracts(contracts.filter(contract => contract.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contracts</h2>
      {user.role === 'admin' && (
        <Link to="/contracts/new" className="btn btn-primary mb-3">Add New Contract</Link>
      )}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Number</th>
              <th>Object</th>
              <th>Direction</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td>{contract.number}</td>
                <td>{contract.object}</td>
                <td>{contract.direction}</td>
                <td>{contract.amount}</td>
                <td>{contract.currency}</td>
                <td>{contract.year}</td>
                {user.role === 'admin' && (
                  <td>
                    <Link to={`/contracts/${contract.id}`} className="btn btn-sm btn-info me-2">Details</Link>
                    <Link to={`/contracts/edit/${contract.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                    <button onClick={() => handleDelete(contract.id)} className="btn btn-sm btn-danger">Delete</button>
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

export default ContractList;