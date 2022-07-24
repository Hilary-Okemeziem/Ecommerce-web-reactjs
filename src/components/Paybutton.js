import React from 'react'
import Checkout from './Checkout';
import { useNavigate } from 'react-router-dom';

const Paybutton = ({cartItems}) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        console.log(cartItems);
        navigate('/checkout')
    }
  return (
    <div>
        <button onClick={() => handleCheckout()}>Proceed to Checkout</button>
    </div>
  )
}

export default Paybutton