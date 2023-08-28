import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar/navbar';
 import Home from './Home/home';
 import Login from './Login/login';
 import Register from './Registration/register';
 import Dashboard from './Dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
/*
   <Route path="/" element={<Home />} />
   */