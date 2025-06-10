import { useDispatch } from 'react-redux';
import { CDN_URL } from '../Utils/constants';
import { addItmes } from '../Utils/CartSlice';
const IteamList = ({ data }) => {
    const dispatch = useDispatch();
    //console.log(data);
    const handlleAddItem = (item) => {
        //add items;
        dispatch(addItmes(item));
    };
    return (
        <div className="flex flex-wrap">
            {data.map((data) => (
                <div
                    className="text-left p-2 m-2 border-gray-200 border-b-2"
                    key={data.card.info.id}
                    data-testid="foodItems"
                >
                    <div className="w-3/12 float-right flex flex-col items-center">
                        <img
                            className="w-[100%] h-auto rounded-lg"
                            src={CDN_URL + data.card.info.imageId}
                            alt="image"
                        />
                        <button
                            className="absolute w-20 m-0.5 p-0.5 border-gray-500 bg-black text-white border rounded-sm"
                            onClick={() => handlleAddItem(data)}
                        >
                            ADD+
                        </button>
                    </div>
                    <div className="w-9/12 pt-2 py-3">
                        <div className="py-2">
                            <span>{data.card.info.name}</span>
                            <span> ₹ {data.card.info.price / 100}</span>
                        </div>
                        <p className="text-xs">{data.card.info.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IteamList;
