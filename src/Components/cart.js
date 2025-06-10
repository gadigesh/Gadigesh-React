import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Utils/CartSlice';
import IteamList from './ItemList';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const clearCartdispctch = useDispatch();
    const handlledClearCart = () => {
        clearCartdispctch(clearCart());
    };
    return (
        <div className="m-5 p-5 flex justify-center flex-col items-center">
            <div className="text-2xl font-bold">Cart</div>
            <button
                className="m-5 w-40 align-middle flex justify-center p-4 bg-black text-white rounded-md"
                onClick={handlledClearCart}
            >
                Clear cart
            </button>
            {cartItems == 0 && <div>Your cart is empty please add iems</div>}
            <div className="w-6/12 m-auto">
                <IteamList data={cartItems} />
            </div>
        </div>
    );
};
export default Cart;
