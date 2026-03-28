import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createContract, updateContract , fetchContracts } from '../../api/api';

function ContractForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contract, setContract] = useState({
    number: '',
    object: '',
    direction: '',
    amount: '',
    currency: '',
    year: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch contract data in placeholders if editing
  useEffect(() => {
    if (id) {
      const fetchContract = async () => {
        try {
          const contracts = await fetchContracts();
          const existingContract = contracts.find(c => c.id === parseInt(id));
          if (existingContract) {
            setContract(existingContract);
          } else {
            // Handle not found (e.g., redirect or show message)
            console.error('Contract not found');
            
          }
        } catch (err) {
          // Handle error (e.g., show error message to user)
          console.error('Error fetching contract:', err);
          
        }
      };
      fetchContract();
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setContract({ ...contract, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (id) {
        await updateContract(id, contract);
      } else {
        await createContract(contract);
      }
      navigate('/contracts');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Show loading or error messages
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render the form
  return (
    <div className="container mt-5">
      <h2 className="mb-4">{id ? 'Edit Contract' : 'Add New Contract'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Contract Number</label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            value={contract.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="object" className="form-label">Contract Object</label>
          <input
            type="text"
            className="form-control"
            id="object"
            name="object"
            value={contract.object}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direction" className="form-label">Direction</label>
          <input
            type="text"
            className="form-control"
            id="direction"
            name="direction"
            value={contract.direction}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={contract.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">Currency</label>
          <input
            type="text"
            className="form-control"
            id="currency"
            name="currency"
            value={contract.currency}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={contract.year}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {id ? 'Update' : 'Create'} Contract
        </button>
      </form>
    </div>
  );
}

export default ContractForm;


