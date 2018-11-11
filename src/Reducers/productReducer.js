import PRODUCTS from '../ProductList';

const initialState={
    products: PRODUCTS,
};

const productReducer= (state= initialState, action)=>{
    switch(action.type){
        case 'decreaseQuantity':
            {
            const { products } = state;
            const updatedProducts= products.map(product=> {
                if(product.id === action.data.id){
                  return {
                      ...product, quantity: --product.quantity
                  }
                }
                else{
                    return product;
                }
            });
            return{
                ...state, products: updatedProducts
            }
        }

        case 'increaseUnit': {
            let { products } = state;
            const id = action.data.id;
            let match = products.filter(items => (id === items.id));
            if (match.length) {
                let quantity = match[0].quantity - 1;
                products = products.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity }
                    } else {
                        return items;
                    }
                });
            }
            return {...state, products };
        }

        case 'deductUnit':
            {
            let { products } = state;
            const id = action.data.id;
            let match = products.filter(items => (id === items.id));
            if (match.length) {
                let quantity = match[0].quantity + 1;
                products = products.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity }
                    } else {
                        return items;
                    }
                });
            }
            return {...state, products };
        }

        case 'deleteCartItem': {
            let { products } = state;
            const id = action.data.id;
            let match = products.filter(items => (id === items.id));
            if (match.length) {
                let quantity = match[0].quantity + action.availableQuantity;
                products = products.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity }
                    } else {
                        return items;
                    }
                });
            }
            return {...state, products };
        }

        default :
            return state
    }

};

export default productReducer;