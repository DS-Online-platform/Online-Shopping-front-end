import React from "react";
import "./AddToCart.css";
import { useStateValue } from "./StateProvider";

function AddToCart({id,name,price}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =() => {
        //remove item from the basket
    
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id:id,
    })
}
  return (
    <div className="checkoutProduct">
     

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default AddToCart;
