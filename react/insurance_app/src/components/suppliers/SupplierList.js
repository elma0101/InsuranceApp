import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fetchSuppliers, deleteSupplier } from '../../api/api';

function SupplierList() {
  const { user } = useAuth();
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {
    try {
      setLoading(true);
      const data = await fetchSuppliers();
      setSuppliers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSupplier(id);
      setSuppliers(suppliers.filter(supplier => supplier.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Suppliers</h2>
      {user.role === 'admin' && (
        <Link to="/suppliers/new" className="btn btn-primary mb-3">Add New Supplier</Link>
      )}
       
     
      
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ICE</th>
              <th>IF</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.ice}</td>
                <td>{supplier.if}</td>
                <td>{supplier.name}</td>
                <td>{supplier.address}</td>
                <td>{supplier.city}</td>
                {user.role === 'admin' && (
                  <td>
                  <Link to={`/suppliers/edit/${supplier.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                  <button onClick={() => handleDelete(supplier.id)} className="btn btn-sm btn-danger">Delete</button>
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

export default SupplierList;
