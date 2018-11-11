import React, { Component } from 'react';
import '../../style.css';

class Cart extends Component {
  constructor(props){
      super(props)
  }

  render(){
      return(
         <ul className="cartItems">
             <li className="cartItemNames" > {this.props.product.name} </li>
             <li> ₹{this.props.product.price} &nbsp;&nbsp;&nbsp; </li>
             <li> Units- {this.props.product.quantity} &nbsp;&nbsp; </li>
             <li>
                 <button onClick={ this.props.onDeductUnit }>&nbsp;- &nbsp;
                 </button>&nbsp;&nbsp;&nbsp;
             </li>
             {
                 this.props.product.quantity===0 ? this.props.handleDeleteFromCart() : this.props.onDeductUnit
             }
             <li>
                 <button onClick={ this.props.onAddUnit } disabled={ this.props.product.availableQuantity===0}>
                     &nbsp;+ &nbsp;
                 </button>&nbsp;&nbsp;&nbsp;
             </li>
             <li> ₹{ this.props.product.price * this.props.product.quantity } &nbsp;&nbsp;&nbsp;</li>
             <li>
                 <button onClick={ this.props.handleDeleteFromCart }>&nbsp;Remove &nbsp;
                 </button>
             </li>
         </ul>
      );
  }
}

export default Cart;