import { CDN_URL } from '../Utils/constants';
import { useContext } from 'react';
import UserInfo from '../Utils/UserConext';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;
    //console.log(resData);
    //const { userName } = useContext(UserInfo);
    return (
        <div
            data-testid="resCard"
            className="flex p-[20px] w-[300px] rounded-sm shadow-grey-300 h-[400px] flex-col bg-sky-000 hover:bg-yellow-200"
        >
            <div className="res-logo-container w-full h-1/2">
                <img
                    className="size-[100%] rounded-md"
                    src={CDN_URL + cloudinaryImageId}
                    alt="image"
                />
            </div>
            <div className="p-4 font-serif rounded-md w-[100%]">
                <h3 className="text-[20px] font-bold">{name}</h3>
                <p className="mb-2 text-xs leading-0 decoration-black">
                    {cuisines.join(',')}
                </p>
                <p className="mb-2 text-xs leading-0 decoration-black">
                    {avgRating}
                </p>
                <p className="mb-2 text-xs leading-0 decoration-black">
                    {costForTwo}
                </p>
                <p className="mb-2 text-xs leading-0 decoration-black">
                    {deliveryTime} Minuts
                </p>
                {/*<p>{userName}</p>*/}
                {/* <button
                    className="flex px-9 py-1 bg-gray-200 m-2 justify-center"
                    onClick={() => {
                        const filterValue = filerRsto.filter(
                            (res) => res.info.avgRating > 4.4,
                        );
                        setListOfRest(filterValue);
                    }}
                >
                    Click Here
                </button> */}
            </div>
        </div>
    );
};

export const withPromotedLebal = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
                    Prmoted One
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
