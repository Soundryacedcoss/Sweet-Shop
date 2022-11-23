import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./App";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const productData = useContext(DataContext);
  const [Price, setPrice] = useState();
  const [Emptymsg, setEmptyMsg] = useState({ display: "none" });
  const [Display, setDisplay] = useState();
  const navigate = useNavigate();
  console.log(productData.cartArr);
  const [userdataname, setUserdataname] = useState([]);
  let userlogdata = localStorage.getItem("data", userdataname);
  let userlogdata1 = JSON.parse(userlogdata);
  console.log(userlogdata1);
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

  const BuyButtonHandler = (e) => {
    if (userlogdata1 === null) {
      alert("Plese SignUp first..");
      navigate("/Signup");
    } else if (userlogdata1.length === 1) {
      alert("Order Placed");
      navigate("/");
      EmptyButtonHandler()
    }
  };
  // Here i am deleting all item from cart
  function EmptyButtonHandler() {
    window.location.reload(false);
  }
 
  //  Back to main page
  const BackHAndler = () => {
    navigate("/");
  };
// REmove indivisual product from cart ***************************************
const RemoveHandler=(val)=>{
  for (let i = 0; i < productData.cartArr.length; i++) {
      if (val ===productData.cartArr[i].id) {
          alert("Warning ! your product will delete from cart");
          productData.cartArr.splice(i, 1);
          productData.setCartArr([...productData.cartArr]);
      }
    }
 }
  return (
    <div className="Cart">
      <div className="flex">
        <button onClick={BackHAndler} className="BackBUtton">
          Back To Home
        </button>
        
      </div>
      <p className="EmptyCartPara" style={Emptymsg}>
        Your CART is empty
      </p>
      <div style={Display} className="cartDiv">
        <div className="ProductDetail">
          {productData.cartArr.map((item) => (
            <div className="CartDivDeatail">
              <div className="Width">
                <img className="CartImgDiv Width" src={item.image} alt="" />
              </div>{" "}
              <div className="ProductNameDiv Width">
                {" "}
                <p>{item.name}</p> <p>${item.price}</p>
              </div>{" "}
              <div className="quantityButtonDiv">
                <button
                  className="Quantitybutton"
                  onClick={() => IncreaseHandler(item.id)}
                >
                  +
                </button>
                <b>{item.quantity}</b>
                <button
                  className="Quantitybutton"
                  onClick={() => DecreseHandler(item.id)}
                >
                  -
                </button>{" "}
              </div>
              <div style={{marginTop:"80px", color:"red",fontSize:"20px"}} onClick={()=>RemoveHandler(item.id)}>remove</div>
            </div>
          ))}
        </div>
        <p style={Display} className="TotalPrice">
          Total: {Price} rs
        </p>{" "}
        <br />
        <br />
        <div style={Display}>
          <button onClick={BuyButtonHandler} value="true" className="Button1">
            Buy Now
          </button>{" "}
          <button className="Button1" onClick={EmptyButtonHandler}>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
};
