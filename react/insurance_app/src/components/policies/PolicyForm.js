


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPolicy, updatePolicy , fetchPolicies} from '../../api/api';

function PolicyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [policy, setPolicy] = useState({
    number: '',
    label: '',
    required: false,
    status: '',
    startDate: '',
    endDate: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
       const fetchPolicy = async () => {
        try {
          const policies = await fetchPolicies();
          const existingPolicy = policies.find(c => c.id === parseInt(id));
          if (existingPolicy) {
            setPolicy(existingPolicy);
          } else {
            // Handle not found (e.g., redirect or show message)
            console.error('Policy not found');
            
          }
        } catch (err) {
          // Handle error (e.g., show error message to user)
          console.error('Error fetching policy:', err);
          
        }
      };
      fetchPolicy();
    }
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPolicy({ ...policy, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (id) {
        await updatePolicy(id, policy);
      } else {
        await createPolicy(policy);
      }
      navigate('/policies');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{id ? 'Edit Policy' : 'Add New Policy'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Policy Number</label>
          <input type="text" className="form-control" id="number" name="number" value={policy.number} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="label" className="form-label">Label</label>
          <input type="text" className="form-control" id="label" name="label" value={policy.label} onChange={handleChange} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="required" name="required" checked={policy.required} onChange={handleChange} />
          <label className="form-check-label" htmlFor="required">Required</label>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name="status" value={policy.status} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input type="date" className="form-control" id="startDate" name="startDate" value={policy.startDate} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input type="date" className="form-control" id="endDate" name="endDate" value={policy.endDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {id ? 'Update' : 'Create'} Policy
        </button>
      </form>
    </div>
  );
}

export default PolicyForm;