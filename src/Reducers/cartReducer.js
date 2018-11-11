const initialState={
    cart : []
};

const cartReducer=(state= initialState, action)=>{
    switch (action.type) {
        case 'decreaseQuantity' : {
            let {cart} = state;
            const id = action.data.id;
            const name = action.data.name;
            const price = action.data.price;
            let availableQuantity = action.data.quantity;
            let match = cart.filter(items => (id === items.id));
            let quantity = 1;
            if (match.length) {
                quantity = match[0].quantity + 1;
                availableQuantity= -- availableQuantity;
                cart = cart.map(items => {
                    if (items.id === id) {
                        return {id, name, quantity, price, availableQuantity}
                    } else {
                        return items;
                    }
                });
            }
            else
                {
                    cart.push({id, name, quantity, price, availableQuantity });
                }
                return {...state, cart};
            }
        case 'increaseUnit': {
            let {cart} = state;
            const id = action.data.id;
            let match = cart.filter(items => (id === items.id));
            if (match.length) {
                let quantity = match[0].quantity + 1;
                let availableQuantity = match[0].availableQuantity - 1 ;
                cart = cart.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity, availableQuantity }
                    } else {
                        return items;
                    }
                });
            }
            return {...state, cart};
        }

        case 'deductUnit': {
            let {cart} = state;
            const id = action.data.id;
            let match = cart.filter(items => (id === items.id));
            if (match.length) {
                let quantity = match[0].quantity - 1;
                let availableQuantity = match[0].availableQuantity + 1 ;
                cart = cart.map(items => {
                    if (items.id === id) {
                        return { ...items, quantity, availableQuantity }
                    } else {
                        return items;
                    }
                });
            }
            return {...state, cart};
        }

        case 'deleteCartItem': {
            let { cart } =state;
            const id= action.data.id;
            const firstIndex= cart.indexOf(id);
            cart.splice(firstIndex,1);
            const newArr= cart.slice();
            return Object.assign({}, state, {cart : newArr});
        }

        default :
            return state;
    }
};

export default cartReducer;