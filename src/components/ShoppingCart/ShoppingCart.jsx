import React, { useState } from "react";
import Broadcom from "./../Broadcom/Broadcom";
import OrderSummary from "../OrderSummary/OrderSummary";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";

const initialCartItems = [
  {
    id: "1",
    name: "Jelly",
    image: "/jelly01.png",
    size: "L",
    price: 4.99,
    quantity: 2,
  },
];

const CART_HEADERS = ["product details", "price", "quantity", "total"];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems?.length || 0;
  const displayCount = cartCount > 9 ? cartCount : `0${cartCount}`;

  return (
    <div className="w-full">
      {/* broadcom component  */}
      <div>
        <Broadcom page={"shopping cart"} />
      </div>
      <div className="w-full py-[130px]">
        <div className="px-4 md:px-0">
          <div className="md:container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <div className="flex flex-col gap-10 w-full">
                <div className="flex items-center justify-between gap-10 pb-4 border-b border-[#1a1219]">
                  <h3 className="text-xl text-[#0f0200] font-archivo font-bold capitalize">
                    shopping cart
                  </h3>
                  <h4 className="text-xl text-[#0f0200] font-bold font-archivo capitalize">
                    ({displayCount})
                  </h4>
                </div>

                <div className="hidden md:grid grid-cols-4 gap-8 pb-4 border-b border-[#1a1219]">
                  {CART_HEADERS.map((header) => (
                    <h4
                      key={header}
                      className="text-center text-lg text-[#787878] font-archivo font-medium capitalize"
                    >
                      {header}
                    </h4>
                  ))}
                </div>

                {cartItems?.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-xl text-gray-500 mb-4">
                      Your cart is empty
                    </p>
                    <Link
                      to="/shop"
                      className="text-[#683292] underline text-lg font-archivo font-medium"
                    >
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-8 w-full">
                    {cartItems?.map((cartItem) => (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        onIncrease={() =>
                          handleQuantityChange(cartItem.id, "increase")
                        }
                        onDecrease={() =>
                          handleQuantityChange(cartItem.id, "decrease")
                        }
                        onRemoveItem={() => handleRemoveItem(cartItem.id)}
                      />
                    ))}
                  </div>
                )}

                <div>
                  <Link
                    to={"/shop"}
                    className="flex items-center gap-3 text-xl text-[#683292] font-archivo font-bold capitalize hover:underline"
                  >
                    <GoArrowLeft /> continue shopping
                  </Link>
                </div>
              </div>

              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
