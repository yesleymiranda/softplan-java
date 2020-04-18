import React from 'react';
import {ToastContainer} from "react-toastify";

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from "./components/home/Home";

function App() {
  return (
      <div className="App">
        <ToastContainer/>
        <Home/>
      </div>
  );
}

export default App;
