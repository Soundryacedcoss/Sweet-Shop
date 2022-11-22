import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import { Caursol } from './Caursol';
import { ProductView } from './ProductView';
import img1 from './image/Screenshot_2022-11-16_11-16-38.png'
import { Link } from 'react-router-dom';
import { DataContext } from './App';
import { Footer } from './Footer';
export const Navbar = () => {
  const cartlength=useContext(DataContext)
  console.log(cartlength.cartArr.length);
 
  return (
    <div >
    <div className={style.Flex}>
     <img className={style.LogoImg} src={img1} alt="" />
     <h2 className={style.StoreName}>Your Sweets Store</h2>
     <div class={style.topnav}>
     <Link to='/'>Home</Link>
     <Link to='/Cart'>Cart {cartlength.cartArr.length}</Link>
      <Link to='/Signup'>Sign-Up</Link>
      <Link to='/Login'>Login</Link>
   </div>
    </div>
    <Caursol/>
    <ProductView/>
    <Footer/>
    </div>
  )
}
