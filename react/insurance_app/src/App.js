import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './components/Home';
import SupplierList from './components/suppliers/SupplierList';
import SupplierForm from './components/suppliers/SupplierForm';
import ContractList from './components/contracts/ContractList';
import ContractForm from './components/contracts/ContractForm';
import ContractDetails from './components/contracts/ContractDetails';
import PolicyList from './components/policies/PolicyList';
import PolicyForm from './components/policies/PolicyForm';
import { AuthProvider } from './components/contexts/AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './components/contexts/AuthContext';
import './App.css';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">
      {user && (!isHomePage || sidebarOpen) && <Sidebar />}
      <div className={`content-area ${user && (!isHomePage || sidebarOpen) ? 'with-sidebar' : ''}`}>
        <TopBar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          showToggle={isHomePage && user}
        />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/suppliers" element={<ProtectedRoute><SupplierList /></ProtectedRoute>} />
          <Route path="/suppliers/new" element={<ProtectedRoute requiredRole="admin"><SupplierForm /></ProtectedRoute>} />
          <Route path="/suppliers/edit/:id" element={<ProtectedRoute requiredRole="admin"><SupplierForm /></ProtectedRoute>} />
          <Route path="/contracts" element={<ProtectedRoute><ContractList /></ProtectedRoute>} />
          <Route path="/contracts/new" element={<ProtectedRoute requiredRole="admin"><ContractForm /></ProtectedRoute>} />
          <Route path="/contracts/edit/:id" element={<ProtectedRoute requiredRole="admin"><ContractForm /></ProtectedRoute>} />
          <Route path="/contracts/:id" element={<ProtectedRoute><ContractDetails /></ProtectedRoute>} />
          <Route path="/policies" element={<ProtectedRoute><PolicyList /></ProtectedRoute>} />
          <Route path="/policies/new" element={<ProtectedRoute requiredRole="admin"><PolicyForm /></ProtectedRoute>} />
          <Route path="/policies/edit/:id" element={<ProtectedRoute requiredRole="admin"><PolicyForm /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;