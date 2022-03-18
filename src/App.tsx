import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Layout from './layouts';
import DetailBook from './templates/DetailBook';
import Home from './templates/Home';
import Login from './templates/Login';
import Registration from './templates/Registration';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/books/:id" element={<DetailBook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
