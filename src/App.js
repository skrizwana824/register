// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Singnup';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}  />
      </Routes>
    </Router>
  );
}

export default App;
