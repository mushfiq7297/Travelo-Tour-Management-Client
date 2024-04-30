import { useLoaderData } from "react-router-dom";
import Lists from "./Lists";
import { useState } from "react";

const MyLists = () => {
  const TouristsSpots = useLoaderData();
  const [spots, setSpots] = useState(TouristsSpots);

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <h2 className="text-5xl font-bold text-center my-4">My lists</h2>
        <div className="overflow-x-auto my-10">
          <table className="table">
            <tbody>
            <tr className="flex justify-between bg-purple-600 text-white font-bold">
          <td className="flex justify-center items-center  w-1/5 ">Tourist Spot Name</td>
          <td className="flex justify-center items-center w-1/5">Location</td>
          <td className="flex justify-center items-center  w-1/5">Country Name</td>
          <td className="flex justify-center items-center w-1/5">
            Update
          </td>
          <td className="flex justify-center items-center w-1/5">
          Delete
          </td>
        </tr>
            </tbody>
            {/* head */}
            <tbody >
              {TouristsSpots.map((TouristsSpot) => (
                <Lists
                  key={TouristsSpot._id}
                  TouristsSpot={TouristsSpot}
                  spots = {spots}
                  setSpots ={setSpots}
                ></Lists>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyLists;
