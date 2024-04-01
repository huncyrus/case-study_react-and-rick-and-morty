import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import List from './components/list/List';
import Details from './components/details/Details';

export const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="content">
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<List/>} 
            />
            <Route 
              path="/details/:id" 
              element={<Details />}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};
