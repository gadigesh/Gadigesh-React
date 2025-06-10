import { useState } from 'react';
import IteamList from './ItemList';
const RestaurantCat = ({ data, showItms, setShowIndex }) => {
    return (
        <div>
            <div className="w-1/2 m-auto my-4 bg-gray-50 shadow-lg p-4">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={setShowIndex}
                >
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span> ⬇️</span>
                    {/* {item List} */}
                </div>
                {showItms && <IteamList data={data.itemCards} />}
            </div>
        </div>
    );
};
export default RestaurantCat;
