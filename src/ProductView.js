import React, {useContext } from 'react'
import { DataContext } from './App'
import productsData from "./ProductDetail";
console.log(productsData);
export const ProductView = () => {
  // using context 
	const data=useContext(DataContext)
const AddToCart=(event)=>{
  console.log(event.target.value);
  for (let i = 0; i < productsData.length; i++) {
    if (event.target.value===productsData[i].id) {
      console.log(productsData[i].id);
        if (productsData[i].quantity<1) {
          productsData[i].quantity+=1
        data.cartArr.push(productsData[i])
        data.setCartArr([...data.cartArr])
        console.log(data.cartArr);
      }
      else if(productsData[i].quantity>=1){
        productsData[i].quantity+=1
        data.setCartArr([...data.cartArr])
      }
    }
    console.log(data.cartArr);
  }
}
  return (
    <div id='main'>
    <div id="products">
      {data.cartArr.length}
      {productsData.map((item) => (
        <div className="product">
          {" "}
          <div>
            {" "}
            <img src={item.image} alt="" srcset="" />{" "}
          </div>{" "}
          <p>
            {" "}
            <h2 className="title">{item.name}</h2>{" "}
            <span>{item.price}rs</span>
          </p>{" "}
          <button value={item.id} className="add-to-cart" onClick={AddToCart}>Add to CART</button>
        </div>
      ))}
    </div>
    </div>
    

  );
};
