import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import Product from './src/components/Product';
import Cart from './src/components/Cart';

import './style.css';

class App extends Component {

    componentWillReceiveProps(nextProps){
        console.log("props",nextProps);
    }

    handelAddToCart = (data) =>{
        this.props.decreaseQuantity(data);
    };

    onAddUnit= (data) =>{
        this.props.increaseUnit(data);
    };

    onDeductUnit= (data) =>{
        this.props.deductUnit(data);
    };

    handelDeleteFromCart= (data) =>{
        this.props.deleteCartItem(data);
    };

    cartTotal=() =>{
        return(
            <h4 className="Border"> Total Price : ₹{this.totalAmount(this.props.cart)} </h4>
        )
    };

    totalAmount =(cartArray) =>{
        return cartArray.reduce((acum,item) =>{
            acum+= item.price * item.quantity;
            return acum;
        },0)
    };

    render() {
        let ProductList= this.props.products.map((data) =>{
            return(
                <Fragment key={data.id}>
                 <Product
                     image={ data.image }
                     name={ data.name }
                     qty={ data.quantity }
                     price={ data.price }
                     AddToCartHandler={()=> this.handelAddToCart(data)}
                 />
                </Fragment>
            )
        });

        let CartList= this.props.cart.map((data) =>{
            return(
                <Fragment key={data.id}>
                    <Cart
                        product={data}
                        onAddUnit={()=> this.onAddUnit(data)}
                        onDeductUnit={()=> this.onDeductUnit(data)}
                        handleDeleteFromCart={()=> this.handelDeleteFromCart(data)}
                    />

                </Fragment>
            )
        });
        return (
            <div className="container">
                <h1>TTN MART</h1>
                <div className="cartView">
                <div className="leftSide">
                    <div className="productList">
                        { ProductList }
                    </div>
                </div>
                    <div className="separation"> </div>
                <div className="rightSide">
                    <h2 className="cartHeading"> My Cart </h2>
                    {/*<div className="cartList">*/}
                        {/*{ CartList }*/}
                    {/*</div>*/}
                    {
                        this.props.cart.length!==0 ?
                            <div> { CartList }{ this.cartTotal()} </div> :
                            <div> Cart Empty </div>
                    }
                </div>
                </div>
            </div>
          )
        }
     }

const mapStateToProps=state=> {
    return {
        products: state.productReducer.products,
        cart: state.cartReducer.cart
    }
};

// const mapDispatchToProps = dispatch  =>{
//  return bindActionCreators({
//      decreaseQuantity,
//      increaseUnit,
//      deductUnit,
//      deleteCartItem
//    },dispatch);
// };

const mapDispatchToProps = dispatch => ({
    decreaseQuantity: (data) => dispatch ({type: 'decreaseQuantity', data:data}),
    increaseUnit: (data) => dispatch ({type: 'increaseUnit' , data: data}),
    deductUnit: (data) => dispatch ({type: 'deductUnit' , data: data}),
    deleteCartItem: (data) => dispatch ({type: 'deleteCartItem', data: data, availableQuantity: data.quantity})
});

export default connect(mapStateToProps,mapDispatchToProps)(App);



