import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import RestaurantCat from './RestaurantCat';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (cat) =>
                cat?.card?.card?.['@type'] ==
                'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
        );
    return resInfo == null ? (
        <Shimmer />
    ) : (
        <div className="text-center my-3">
            <h1 className="font-bold my-2 text-2xl">
                {resInfo?.cards[2]?.card?.card?.info?.name}
            </h1>
            <p className="font-bold text-lg">
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.toString(',')}
            </p>
            {categories.map((cat, index) => (
                <RestaurantCat
                    key={index}
                    data={cat?.card?.card}
                    setCurrentIndex={index}
                    showItms={index == showIndex ? true : false}
                    setShowIndex={() =>
                        setShowIndex(showIndex === index ? null : index)
                    }
                    // onToggle={() => {
                    //     onchangeToggle(index);
                    // }}
                />
            ))}
            {/* <h2>Menu</h2> */}
            {/* <ul>
                {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                    (item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ),
                )}
            </ul> */}
        </div>
    );
};
export default RestaurantMenu;
