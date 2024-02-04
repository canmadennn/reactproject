import React from 'react';
import logo from './logo.svg';
import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

import AdGoster from "./components/AdGoster";
import SelamVer from "./components/SelamVer";
import Product from "./components/Product";


function App() {
  return (
    <div className="container mt-5">
        <AdGoster/>

    </div>
  );
}

export default App;
