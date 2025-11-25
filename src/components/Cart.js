import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dataValue = useSelector((store) => store.cart.items);
  //console.log(dataValue);

  const dispatch = useDispatch();
  const removeTheItem = () => {
    dispatch(removeItem());
  };
  const clearTheCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {dataValue.length ? (
        <button onClick={clearTheCart} className="border border-black">
          clear cart
        </button>
      ) : (
        <div>
          <h2>Empty cart</h2>
        </div>
      )}
      <div className="cart-details">
        {dataValue.map((e) => {
          return (
            <div key={e}>
              <h2>{e}</h2>
              <button onClick={removeTheItem} className="border border-black">
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
