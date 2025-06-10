import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import { withPromotedLebal } from './RestaurantCard';
import { useContext } from 'react';
import UserInfo from '../Utils/UserConext';
//import { act } from 'react';

const Body = () => {
    // local state variables --- super power variables
    // always use on top of the body component
    // never create usestate outside the body component
    // don't use useState in the if - else or for loops statement
    const [listOfRest, setListOfRest] = useState([]);
    const [filerRsto, setfilerRsto] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [inputVal, setinputVal] = useState(false);
    const RestaurantCardPromoted = withPromotedLebal(RestaurantCard);
    const { userNameG, setUserNameG } = useContext(UserInfo);
    const [selectedValue, setSelectedValue] = useState('');
    //const [userName, setUserNameG] = useContext(UserInfo);
    //console.log(userNameG);
    // if no dependcy array  then useeffect will run on every render
    // if we have dependcy empty array then useeffect will run only once after render the component
    // if we have dependcy is listOfRest then useeffect will run when every listOfRest changes useeffect will called
    // act(() => {

    // });
    useEffect(() => {
        fetchData();
    }, [searchText]);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
        );
        const json = await data.json();
        //optional chaining
        setListOfRest(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );
        setfilerRsto(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
        );
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) {
        return (
            <h1>
                Looks like you're Offline! please check your internet
                connection{' '}
            </h1>
        );
    }

    const filterResto = filerRsto.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    const filterValue = filerRsto.filter((res) => res.info.avgRating > 4.4);
    const handlechangesected = (e) => {
        setSearchText(e.target.value);
    };
    //console.log(listOfRest);
    return listOfRest.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex items-center w-30 p-4 m-4 justify-center">
                <input
                    className="border-2 w-[350px] p-1 m-2 border-solid border-black"
                    type="text"
                    value={searchText}
                    data-testid="searchinput"
                    placeholder="Search items..."
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    onFocus={() => {
                        setinputVal(true);
                    }}
                    onBlur={() => {
                        setinputVal(true);
                    }}
                />

                {inputVal && (
                    <div className="flex flex-col items-center -z-0 left-[36.6%] absolute">
                        <select
                            className="border-x-2 border-b-2 w-[350px] p-1 mt-[18px] border-solid border-black absolute"
                            onBlur={() => {
                                setinputVal(false);
                            }}
                            onChange={handlechangesected}
                        >
                            <option value="" className="text-center">
                                -------Select--------
                            </option>
                            {filterResto.map((filterValue, index) => (
                                <option
                                    key={filterValue.info.id}
                                    value={filterValue.info.name}
                                >
                                    {filterValue.info.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <button
                    className="px-9 py-1 bg-green-200 m-2"
                    onClick={() => {
                        setListOfRest(filterResto);
                    }}
                >
                    Search
                </button>
                <button
                    className="flex px-9 py-1 bg-gray-200 m-2"
                    onClick={() => {
                        setListOfRest(filterValue);
                    }}
                >
                    Top rated restaurants
                </button>
                {/* <h3 className="p-2">LogedIn User : </h3>
                 <input
                    className="border-2 w-[300px] p-2 border-solid border-black"
                    type="text"
                    value={userNameG}
                    placeholder="user Name"
                    onChange={(e) => {
                        setUserNameG(e.target.value);
                    }}
                /> */}
            </div>
            {/* {inputVal && <SearchableDropDown />} */}
            <div className="flex flex-wrap content-around justify-center border-gray-400 border-[2px] p-4">
                {listOfRest.map((restaurants) => (
                    <Link
                        key={restaurants.info.id}
                        to={'/restorent/' + restaurants.info.id}
                    >
                        {restaurants.info.avgRating > 4.2 ? (
                            <RestaurantCardPromoted resData={restaurants} />
                        ) : (
                            <RestaurantCard resData={restaurants} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
