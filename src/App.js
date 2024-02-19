import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ContextComponent from './Context/ContextComponent';
import BooksList from './Components/BooksList';
import AddBook from './Components/AddBook.js';
import Dashboard from './Components/Dashboard';

function App() {
  return (

    <Router>
      <div id="wrapper">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<ContextComponent><Dashboard /></ContextComponent>} />
          <Route path="/bookslist" element={<ContextComponent><BooksList /></ContextComponent>} />
          <Route path="/addbook" element={<ContextComponent><AddBook /></ContextComponent>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
