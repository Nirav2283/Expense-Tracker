import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetAllExpense from './components/GetAllExpense';
import DetailExpense from './components/DetailExpense';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';


function App() {
  const [progress, setProgress] = useState(0); 

  return (
    <>
      <Router>
        <LoadingBar
          color='red'
          progress={progress}
          onLoaderFinished={() => setProgress(0)} 
        />
        <Navbar setProgress={setProgress} />
        <Routes>
          <Route path="/" element = { <Home />} />
          <Route path="/expenses" element = { <GetAllExpense />} />
          <Route path="/expenses/:id" element = { <DetailExpense />} />
          <Route path="/expenses/add" element = { <AddExpense />} />
          <Route path="/expenses/edit/:id" element = { <EditExpense />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
