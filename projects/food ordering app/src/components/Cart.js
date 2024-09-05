import { useDispatch, useSelector } from "react-redux";
import { RES_MENU_IMG_CDN } from "../utils/constants";
import { clearCart, removeItem } from "../redux/slices/cartSlice";
import RestroCategoryItemList from "./RestroCategoryItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // price, description, defaultPrice, imageId, ratings
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="">
        <h2 className="text-center">CART</h2>
        <div className="text-end">
          <button
            onClick={handleClearCart}
            className="border border-1 bg-danger fs-4 text-white rounded-1"
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length > 0 ? (
          <div className="mx-auto w-75">
            {cartItems.map((items) => {
              return <RestroCategoryItemList data={items} />;
            })}
          </div>
        ) : (
          <p className="text-center">Cart is Empty. Add Items to the Cart!</p>
        )}
      </div>
    </>
  );
};

export default Cart;
