import { Routes,Route } from 'react-router-dom';
import React, { createContext, useState } from 'react'
import './App.css';
import { Caursol } from './Caursol';
import { FilterBAr } from './FilterBAr';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { ProductView } from './ProductView';
import Signup from './Signup.js';
import { Cart } from './Cart';
export const DataContext=createContext()

// import { Signup } from './Signup';
function App() {
const[cartArr,setCartArr]=useState([])

  return (
    <div className="App">
      <DataContext.Provider value={{cartArr,setCartArr}}>
      <Routes>
      <Route path='/' element={<Navbar/>} /> 
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
