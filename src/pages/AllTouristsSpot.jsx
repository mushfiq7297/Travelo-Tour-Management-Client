import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "./TouristsSpotCard";



const AllTouristsSpot = () => {
    const TouristsSpots = useLoaderData()
    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-5xl font-bold text-center my-4">All tourists spot</h2>
            <div className="grid gap-3 px-auto content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                TouristsSpots.map(TouristsSpot => <TouristsSpotCard 
                key={TouristsSpot._id}
                TouristsSpot = {TouristsSpot}

                ></TouristsSpotCard>)
            }
            </div>
        </div>
    );
};

export default AllTouristsSpot;