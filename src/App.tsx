import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Error from './ErrorPage/error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
