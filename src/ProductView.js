import React, {useContext, useState } from 'react'
import { DataContext } from './App'
import productsData from "./ProductDetail";
import style from './Navbar.module.css'
export const ProductView = () => {
  const [Inputvalue, setInputValue] = useState();
  const[Catagory,setCatagory]=useState("")
  const SearchInputHandler = (event) => {
    setInputValue(event.target.value);
    console.log(Inputvalue);
  };
  const[OptionValue,setOPtionValue]=useState()
  const[FilterArr,setFilterArr]=useState(productsData)
  // using context 
	const data=useContext(DataContext)
const AddToCart=(event)=>{
  console.log(event.target.value);
  for (let i = 0; i < productsData.length; i++) {
    if (event.target.value===productsData[i].id) {
      console.log(productsData[i].id);
        if (productsData[i].quantity<1) {
          alert("Product added to cart");
          productsData[i].quantity+=1
        data.cartArr.push(productsData[i])
        data.setCartArr([...data.cartArr])
      }
      else if(productsData[i].quantity>=1){
        alert("Product added to cart");
        productsData[i].quantity+=1
        data.setCartArr([...data.cartArr])
      }
    }
    console.log(data.cartArr);
  }
}
// here i am taking the value of select catagory
const SelectCatagoryHandler=(e)=>{
  setCatagory(e.target.value)
  console.log(Catagory);
}
const SelectHandler=(e)=>{
  setOPtionValue(e.target.value)
}
// Here i am filtering the product BY price 
const FilterButtonHandler=()=>{
  if (Catagory==="Price" && OptionValue==="Assending") {
    console.log(OptionValue);
    const filterProducts=productsData
      filterProducts.sort(function(a, b){return a.price-b.price});
      setFilterArr([...filterProducts])
      console.log(FilterArr);
      console.log(filterProducts);
  }
  else if(Catagory==="Price" && OptionValue==="Dessending"){
    const filterProducts=productsData
      filterProducts.sort(function(a, b){return b.price-a.price});
      setFilterArr([...filterProducts])
      console.log(FilterArr);
      console.log(filterProducts);
  }
  else if(Catagory==="Rating" && OptionValue==="Dessending"){
    const filterProducts=productsData
      filterProducts.sort(function(a, b){return b.rating.length-a.rating.length});
      setFilterArr([...filterProducts])
  }
  else if(Catagory==="Rating" && OptionValue==="Assending"){
    const filterProducts=productsData
      filterProducts.sort(function(a, b){return a.rating.length-b.rating.length});
      setFilterArr([...filterProducts])
  }
  console.log(FilterArr[0].rating.length);
}
 //*********************************** Searching the products*****************************************
 const SearchButtonHandler = () => {
  var SearchvalArr = [];
  // setInputValue()
  console.log(productsData);
  const filterProducts = productsData;
  for (let i = 0; i < filterProducts.length; i++) {
    var temp = Inputvalue.toLowerCase();
    var name = filterProducts[i].name.toLowerCase();
    if (Inputvalue === "") {
      alert("Please enter name");
    } else if (name.match(temp)) {
      console.log(productsData[i]);
      SearchvalArr.push(productsData[i]);
      setFilterArr(SearchvalArr);
     
    }
  }
};
  return (
    <>
    <div className='Flex'>
        <div>
        <input className={style.SearchInput} placeholder="Search sweets name"  type="Search" onChange={SearchInputHandler} /> 
        </div>
        <button onClick={SearchButtonHandler}>Search</button>
        <div className={style.FilerterDropDown}>
        <select name="" onChange={SelectCatagoryHandler}>
            <option value="">Filter</option>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
        </select>
        <select name="" onChange={SelectHandler}>
            <option value="">Filter</option>
            <option value="Assending">Assending</option>
            <option value="Dessending">Dessending</option>
        </select>
        <button onClick={FilterButtonHandler} className='Filter'>Filter</button>
        </div> 
    </div>
    <div id='main'>
    <div id="products">
      {FilterArr.map((item) => (
        <div className="product">
          {" "}
          <div>
            {" "}
            <img src={item.image} alt="" srcset="" />{" "}
          </div>{" "}
          <p>
            {" "}
            <h2 className="title">{item.name}</h2>{" "}
            <span>{item.price}rs</span> <br />
            <span>{item.rating}</span>
          </p>{" "}
          <button value={item.id} className="add-to-cart" onClick={AddToCart}>Add to CART</button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};
