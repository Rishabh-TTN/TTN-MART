import React from 'react';

import '../../style.css';

const AddToCart =(props)=>{
   return(
       <div>
           <button  className='addToCart-btn' onClick={ props.AddToCartHandler } disabled={ props.quantity===0 }>
               ADD TO CART
           </button>
       </div>
   )
}

export default AddToCart;