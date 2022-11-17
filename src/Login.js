import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
export const Login = () => {
    const navigate=useNavigate();
    const[userdataname,setUserdataname]=useState([]);
    const[userlogname,setuserLogname]=useState('');
    const[pass,setPass]=useState('');
    const LoginButtonHandler=()=>{
        let userlogdata=localStorage.getItem("data",userdataname)
        let userlogdata1=JSON.parse(userlogdata)
        console.log(userlogdata1);
        for(var i=0;i<userlogdata1.length;i++){
          // checking the data which is taken from user
          if(userlogname===userlogdata1[i].username && pass===userlogdata1[i].password){
            console.log("success");
            navigate('/');
          }
          else if(userlogname!==userlogdata1[i].username){
            alert("Wrong username");
          }
          else if(pass!==userlogdata1[i].password){
            alert("wrong password");
          } 
        }  
    }
     // function for taking the value from input boxes
     const userNameHandler=(e)=>{
        setuserLogname(e.target.value)
      }
      const passwHandler=(e)=>{
          setPass(e.target.value)
      }
      // Back to sighn up page
      const SignUpHere=()=>{
        navigate('/Signup')
      }
      // Back to home
      const BackHome=()=>{
        navigate('/')
      }
  return (
    <div >
    <div class="LoginPage">
    <h2>Login Here</h2>
    <input type="text" placeholder="Enter Username" name="uname" onChange={userNameHandler} required/>
    <input type="password" placeholder="Enter Password" name="psw" onChange={passwHandler} required/>    
    <button onClick={LoginButtonHandler} className='SignUpBUtton' type="submit">Login</button>
    <p onClick={SignUpHere}>Don't Have Account <b>Register Now</b></p>
    or <p onClick={BackHome}>Back To home</p>
    </div>
    </div>
  )
}
