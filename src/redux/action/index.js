
import { fetchCart } from "../../localstorage"

const cartInfo = fetchCart()

export const cartItem = {
    cartItems : cartInfo
}
// for add item to cart
export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload: product
    }
}

// for delete item from cart
export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload: product
    }
}

