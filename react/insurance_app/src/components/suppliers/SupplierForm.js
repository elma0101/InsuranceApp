import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createSupplier, updateSupplier, fetchSuppliers } from '../../api/api';

function SupplierForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({
    ice: '',
    if: '',
    name: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    if (id) {
      const fetchSupplier = async () => {
        try {
          const suppliers = await fetchSuppliers();
          const existingSupplier = suppliers.find(s => s.id === parseInt(id));
          if (existingSupplier) {
            setSupplier(existingSupplier);
          } else {
            // Handle not found
            console.error('Supplier not found');

          }
        } catch (err) {
          // Handle error
          console.error('Error fetching supplier:', err);

        }
      };
      fetchSupplier();
    }
  }, [id]);

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateSupplier(id, supplier);
      } else {
        await createSupplier(supplier);
      }
      navigate('/suppliers');
    } catch (err) {
      console.error('Error submitting supplier:', err);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{id ? 'Edit Supplier' : 'Add New Supplier'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="ice" value={supplier.ice} onChange={handleChange} placeholder="ICE" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="if" value={supplier.if} onChange={handleChange} placeholder="IF" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" value={supplier.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="address" value={supplier.address} onChange={handleChange} placeholder="Address" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="city" value={supplier.city} onChange={handleChange} placeholder="City" required />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'} Supplier</button>
      </form>
    </div>
  );
}

export default SupplierForm;
