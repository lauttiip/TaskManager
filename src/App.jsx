// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import TaskManager from './pages/TaskManager';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;