import { Routes,Route } from 'react-router-dom';
import React, { createContext, useState } from 'react'
import './App.css';
import { Login } from './Login';
import { Navbar } from './Navbar';
import Signup from './Signup.js';
import { Cart } from './Cart';
// here i am creating context and exporting  for storing data
export const DataContext=createContext()
// creating context for changing the theame
export const TheameContext=createContext()
// import { Signup } from './Signup';
function App() {
const[cartArr,setCartArr]=useState([])
const[theame,setTheame]=useState({ backgroundColor:"White" })
  return (
    <div className="App">
      <DataContext.Provider value={{cartArr,setCartArr}}>
      <TheameContext.Provider value={theame}>
      <Routes>
      <Route path='/' element={<Navbar/>} /> 
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </TheameContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
