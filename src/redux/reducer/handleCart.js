const handleCart = [];
export const actionType = {
SET_CARTITEMS : "SET_CARTITEMS"
}

const handleCarts = (state = handleCart, action) => {
    // const product = action.payload;
    switch (action.type) {
        case "ADDITEM": return [
                ...state,
                action.payload
        ]
        break;

        case "DELITEM": 
            return state = state.filter((x) => {
                return x._id !== action.payload._id
            })
        break;

        case actionType.SET_CARTITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            }
        
            // Check if product already exists
            // const exist = state.find((x)=> x.id === product._id)
            // if (exist){
            //     return state.map((x) =>
            //      x.id === product._id ? {...x, qty: x.qty = 1} : x);
            // } else {
            //     const product = action.payload;
            //     return[
            //         ...state,
            //         {
            //             ...product,
            //             qty: 1
            //         }
            //     ]
            // }
            // break;

        // case "DELITEM":
        //     const exist1 = state.find((x) => x.id === product._id);
        //     if (exist1.qty === 1){
        //         return state.filter((x) => x.id === exist1._id)
        //     }else {
        //         return state.map((x) => 
        //             x.id === product._id ? {...x, qty: x.qty-1} : x
        //         )
        //     };
        //     break;

    
        default:
            return state;
    }
}

export default handleCarts;