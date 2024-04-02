import logo from './logo.svg';
import './App.css';
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Navigate,
        useNavigate,
        Link,
      } from "react-router-dom";
      
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import { RiInstagramFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


import { useState } from 'react';
import Modal from './components/Modal';
import Home from './pages/Home';
import Search from './pages/Search';
import { WatchProvider } from './Context/WatchContext';


function App() {
    

  return (
        <WatchProvider>

        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/Search"
            element={<Search/>}
            />
        </Routes>
      
      </Router>
            </WatchProvider>
  )
}

export default App;
