import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./App";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Cart = () => {
  const productData = useContext(DataContext);
  const [Price, setPrice] = useState();
  const[Emptymsg,setEmptyMsg]=useState({display:"none"})
  const[Display,setDisplay]=useState()
  console.log(productData.cartArr);
  // increase Button Functionaliy
  const IncreaseHandler = (val) => {
    console.log("hii");
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        productData.cartArr[i].quantity += 1;
        productData.setCartArr([...productData.cartArr]);
      }
    }
  };
  // decrese button functinality
  const DecreseHandler = (val) => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        
        if (productData.cartArr[i].quantity <= 1) {
            alert("Warning ! your product will delete from cart");
          productData.cartArr.splice(i, 1);
          productData.setCartArr([...productData.cartArr]);
        } else {
          productData.cartArr[i].quantity -= 1;
          productData.setCartArr([...productData.cartArr]);
        }
      }
    }
  };
  // Adding Price here
  let totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      totalprice +=
        productData.cartArr[i].quantity * productData.cartArr[i].price;
      console.log(
        productData.cartArr[i].quantity * productData.cartArr[i].price
      );
      setPrice(totalprice);
      console.log(Price);
      <Navigate to="/"></Navigate>;
    }
    if (productData.cartArr.length === 0) {
      setDisplay({ display: "none" });
      setEmptyMsg({ display: "block" });
    }
  }, [productData.cartArr]);

  const BuyButtonHandler=(e)=>{
    if(e.target.value=true){
      alert("Thank you for Shopping 😊")
    }

  }
  // Here i am deleting all item from cart 
function EmptyButtonHandler() {
    window.location.reload(false);
  }
  return (
    <>
    <p style={Emptymsg}>Your CART is empty</p>
    <div style={Display} className="cartDiv">
      <div className="ProductDetail">
      {productData.cartArr.map((item) => (
        <div className="CartDivDeatail">
          <div className="CartImgDiv">
            <img src={item.image} alt="" />
          </div>{" "}
          <div className="ProductNameDiv">
            {" "}
            <p>{item.name}</p> <p>{item.price} Rs</p>
          </div>{" "}
          <div className="quantityButtonDiv">
            <button className="button" onClick={() => IncreaseHandler(item.id)}>
              +
            </button>
            <b>{item.quantity}</b>
            <button className="button" onClick={() => DecreseHandler(item.id)}>
              -
            </button>{" "}
          </div>
        </div>
      ))}
      </div>
      <p style={Display} className="TotalPrice">Total: {Price} rs</p> <br />
       <br />
       <div style={Display}>
       <button onClick={BuyButtonHandler} className="Button1">Buy Now</button> { " "}
      <button className="Button1" onClick={EmptyButtonHandler}>Empty Cart</button>
    </div>
    </div>
    </>
  );
};
