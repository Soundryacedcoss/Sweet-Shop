import React from 'react'
import style from './Navbar.module.css'
export const FilterBAr = () => {
  const FilterButtonHandler=()=>{

  }
  return (
    <div className='Flex'>
        <div>
        <input className={style.SearchInput} type="Search" />
        </div>
        <div className={style.FilerterDropDown}>
        <select name="">
            <option value="">Filter</option>
            <option value="">Price</option>
        </select>
        <select name="">
            <option value="">Filter</option>
            <option value="">Assending</option>
            <option value="">Dessending</option>
        </select>
        <button onClick={FilterButtonHandler} className='Filter'>Filter</button>
        </div>
        
    </div>
  )
}
