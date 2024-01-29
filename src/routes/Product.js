import React from 'react'
import Products from '../Components/Products'

function Product({ item, handleClick }) {
  return (
    <div>
      <Products item={item} handleClick={handleClick} />
    </div>
  );
}

export default Product