const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

// Suppliers
export const fetchSuppliers = async () => {
  const response = await fetch(`${API_BASE_URL}/suppliers`);
  if (!response.ok) throw new Error('Failed to fetch suppliers');
  return response.json();
};

export const createSupplier = async (supplierData) => {
  const response = await fetch(`${API_BASE_URL}/suppliers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplierData)
  });
  if (!response.ok) throw new Error('Failed to create supplier');
  return response.json();
};

export const updateSupplier = async (id, supplierData) => {
  const response = await fetch(`${API_BASE_URL}/suppliers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplierData)
  });
  if (!response.ok) throw new Error('Failed to update supplier');
  return response.json();
};

export const deleteSupplier = async (id) => {
  const response = await fetch(`${API_BASE_URL}/suppliers/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete supplier');
};

// Contracts
export const fetchContracts = async () => {
  const response = await fetch(`${API_BASE_URL}/contracts`);
  if (!response.ok) throw new Error('Failed to fetch contracts');
  return response.json();
};

export const createContract = async (contractData) => {
  const response = await fetch(`${API_BASE_URL}/contracts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contractData)
  });
  if (!response.ok) throw new Error('Failed to create contract');
  return response.json();
};

export const updateContract = async (id, contractData) => {
  const response = await fetch(`${API_BASE_URL}/contracts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contractData)
  });
  if (!response.ok) throw new Error('Failed to update contract');
  return response.json();
};

export const deleteContract = async (id) => {
  const response = await fetch(`${API_BASE_URL}/contracts/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete contract');
};

// Policies
export const fetchPolicies = async () => {
  const response = await fetch(`${API_BASE_URL}/policies`);
  if (!response.ok) throw new Error('Failed to fetch policies');
  return response.json();
};

export const fetchPolicyById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/policies/${id}`);
  if (!response.ok) throw new Error('Failed to fetch policy');
  return response.json();
};

export const createPolicy = async (policyData) => {
  const response = await fetch(`${API_BASE_URL}/policies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(policyData)
  });
  if (!response.ok) throw new Error('Failed to create policy');
  return response.json();
};

export const updatePolicy = async (id, policyData) => {
  const response = await fetch(`${API_BASE_URL}/policies/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(policyData)
  });
  if (!response.ok) throw new Error('Failed to update policy');
  return response.json();
};

export const deletePolicy = async (id) => {
  const response = await fetch(`${API_BASE_URL}/policies/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete policy');
};

// If you need any additional policy-related API calls, add them here