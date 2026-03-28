import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// You'll need to implement a fetchContractById function in api.js
// import { fetchContractById } from '../../api/api';

function ContractDetails() {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContract = async () => {
      try {
        // const data = await fetchContractById(id);
        // setContract(data);
        // For now, i'll use dummy data
        setContract({
          id: 1,
          number: 'C001',
          object: 'Contract A',
          direction: 'North',
          amount: 10000,
          currency: 'USD',
          year: 2023
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadContract();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!contract) return <div>Contract not found</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contract Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contract Number: {contract.number}</h5>
          <p className="card-text"><strong>Object:</strong> {contract.object}</p>
          <p className="card-text"><strong>Direction:</strong> {contract.direction}</p>
          <p className="card-text"><strong>Amount:</strong> {contract.amount} {contract.currency}</p>
          <p className="card-text"><strong>Year:</strong> {contract.year}</p>
          <Link to={`/contracts/edit/${contract.id}`} className="btn btn-warning me-2">Edit</Link>
          <Link to="/contracts" className="btn btn-secondary">Back to List</Link>
        </div>
      </div>
    </div>
  );
}

export default ContractDetails;