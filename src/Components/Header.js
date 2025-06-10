import { LOGO_URL } from '../Utils/constants';
import { useContext, useState } from 'react';
//import { Link } from 'react-router';
import useOnlineStatus from '../Utils/useOnlineStatus';
import UserInfo from '../Utils/UserConext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setbtName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    //let btnName = "Login";
    const { userName } = useContext(UserInfo);
    // we are subscribing the store by using selector
    const cart = useSelector((store) => store.cart.items);
    //console.log(cart, 'skjhks');
    return (
        <div className="flex justify-between bg-gray-200">
            <div>
                <img className="w-40 bg-gray-200" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 text-2xl">
                    <li className="px-4">
                        Online status {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cantact">Contact US</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Cart">Cart - ({cart.length} Items)</Link>
                    </li>
                    <button
                        className="pointer-events-auto px-5"
                        onClick={() => {
                            btnName == 'Login'
                                ? setbtName('Logout')
                                : setbtName('Login');
                        }}
                    >
                        {btnName}
                    </button>
                    <li>{userName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
