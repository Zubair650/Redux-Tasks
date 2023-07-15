const { createStore } = require('redux');
const { combineReducers } = require('redux');

const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";

const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

const initialProductState = {
    numberOfProducts: 1,
    products: ["Bottle"]
}

const initialCartState = {
    numberOfCarts: 1,
    carts: ["Paper"]
}

const Add_Products = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

const Get_Products = () => {
    return {
        type: GET_PRODUCTS
    }
}

const Add_Cart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}

const Get_Cart = () => {
    return {
        type: GET_CART
    }
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                numberOfProducts: state.numberOfProducts + 1,
                products: [...state.products, action.payload]
            }

        case GET_PRODUCTS:
            return {
                ...state
            }

        default:
            return state;
    }
}

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                numberOfCarts: state.numberOfCarts + 1,
                carts: [...state.carts, action.payload]
            }

        case GET_CART:
            return {
                ...state
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(Get_Products());
store.dispatch(Add_Products('Honey'));

store.dispatch(Get_Cart());
store.dispatch(Add_Cart('Money'));
