import React, { Component } from 'react';
import AddToCart from './addToCart';

import '../../style.css';

class Product extends Component{

    componentWillReceiveProps(nextProps){
        console.log("props",nextProps);
    }

    render(){
        return(
            <ul className="product-description">
                <li> <img src={ this.props.image } /> </li>
                <li>
                    <h4> <b>{ this.props.name }</b> </h4>
                    <h4>₹<b>{ this.props.price }</b> </h4>
                    {
                        this.props.qty > 0 ? (<h4> IN STOCK (<b> { this.props.qty }</b>) </h4>)
                        : (<h4> <b> OUT OF STOCK </b> </h4>)
                    }
                        <AddToCart  AddToCartHandler={this.props.AddToCartHandler} quantity={ this.props.qty } />
                </li>
            </ul>
        )
    }
}

export default Product;