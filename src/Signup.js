import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import './App.css'
export default function Signup() {
  const navigate=useNavigate();
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState('')
    const[number,setNumber]=useState('')
    const[logarr,setLogarr]=useState([])
     // functions for taking the value from input boxes
     const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const usernameHandler=(e)=>{
        setUsername(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const numberHandler=(e)=>{
        setNumber(e.target.value)
    }
    const SignUpButtonHandler=()=>{
        var atposition=email.indexOf("@");
        var dotposition=email.lastIndexOf(".");
        if(name===""){
          alert("name should not be empty")
          document.form.name.focus();
        }
        else if(!isNaN(name)){
          alert("Name Should not be integer");
          document.form.name.focus();
        }
        else if(email===""){
          alert("Plese enter your email");
          document.form.email.focus();
        }
        else if ((atposition<1 || email.lastIndexOf(".")<atposition+2 || dotposition+2>=email.length)) {
          alert("please enter valid email");
          document.form.email.focus();
        }
        else if(username===""){
          alert("Please enter your username");
          document.form.username.focus();
        }
        else if(password===""){
          alert("please enter password");
          document.form.psw.focus();
        }
        else if(number===""){
          alert("Enter mobile number")
          document.form.number.focus();
        }
        else if(isNaN(number)){
          alert("number should be integer")
          document.form.number.focus();
       }
       else{
        var obj={
            name:name,
            email:email,
            username:username,
            password:password,
            number:number,
        }
        logarr.push(obj)
        let arr= JSON.stringify(logarr)
        // set the values in local storage
        localStorage.setItem("data",arr);
        alert("Created account succesfully Now please login")
        navigate('/Login')
      }
    }
  return (
    <div>
       <div className="container1">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label>Full name</label>
          <input type="text" name="name" placeholder="Full name" onChange={nameHandler}  />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" onChange={emailHandler} />
          <label>UserName</label>
          <input type="text" name="username" placeholder="Enter username" onChange={usernameHandler}/>
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw" onChange={passwordHandler}
            minLength={4} maxLength={20}
          />
          <label>Mobile</label>{" "}
          <input type="text" name="number" placeholder="Enter your number" onChange={numberHandler} maxLength={10} minLength={10} />
          <button className="SignUpBUtton" onClick={SignUpButtonHandler}>Sign Up</button>
         </div>
    </div>
  )
}