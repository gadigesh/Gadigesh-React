import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import { Suspense } from 'react';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserInfo from './Utils/UserConext';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore';
import Cart from './Components/cart';
// React.createElement ==> ReactElement -Js Object ==> HTML Element
// const heading = React.createElement("h1",{id:"parent"},"Hi I am gadigesh");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//jsx -- transfile before going to js engine -- parcel -- babel(package)
//Jsx ==> React.createElement ==> ReactElement -Js Object ==> HTML Element

// const jsxHeading = (
//   <h1 id="heading" className="gadigesh" tabIndex="1">
//     I am Gadigesh Hiremath
//   </h1>
// );

// const Title = () => (
//   <h3 id="heading" className="gadigesh" tabIndex="1">
//     I am Gadigesh Hiremath
//   </h3>
// );

// const abc = 1000;

// Functional component

// const HeadingComponent = () => (
//   <div id="container">
//     <Title></Title>
//     {Title()}
//     <h1 className="gadi">Functional Component</h1>
//   </div>
// );

// const stylecard = {
//   backgroundColor: "#f0f0f0",
// };

// not using keys while using map

const Grocery = lazy(() => import('./Components/Grocery'));

const AppLayout = () => {
    const [userNameG, setUserNameG] = useState();
    useEffect(() => {
        const data = {
            userName: 'Gadigesh',
        };
        setUserNameG(data.userName);
    }, []);
    return (
        <Provider store={AppStore}>
            <UserInfo.Provider value={{ userName: userNameG, setUserNameG }}>
                <div className="app">
                    <UserInfo.Provider value={{ userName: 'Hiremath' }}>
                        <Header />
                    </UserInfo.Provider>
                    <Outlet />
                    <Footer />
                </div>
            </UserInfo.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/cantact',
                element: <Contact />,
            },
            {
                path: '/restorent/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<div>Hi this suspense compoent</div>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/Cart',
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
