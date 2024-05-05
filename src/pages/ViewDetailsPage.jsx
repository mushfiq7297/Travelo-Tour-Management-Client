import { useLoaderData, useParams } from "react-router-dom";

const ViewDetailsPage = () => {
  const spots = useLoaderData();
  const { id } = useParams();
  const spot = spots.find((spot) => spot._id == id);
  const {
    touristspotsname,
    countryname,
    location,
    shortdescription,
    photourl,
    averagecost,
    totavisitorsperyear,
    seasonality,
    traveltime,
  } = spot;

  return (
    <div className="my-4 font-stack">
      <div
        data-aos="zoom-in-up"
        className="flex flex-col w-3/5 mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100"
      >
        <div>
          <img
            src={photourl}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500"
          />
          <h2 className=" font-bold text-2xl">{touristspotsname}</h2>
          <p className="text-xl text-gray-400">{shortdescription}</p>
        </div>
        <div className="flex mt-3 justify-between">
          <div>
            <h2>Country: {countryname}</h2>
            <h2>Location: {location}</h2>
            <h2>Seasonality: {seasonality}</h2>
          </div>
          <div>
            <h2>Travel time: {traveltime}</h2>
            <h2>Visitors: {totavisitorsperyear}</h2>
            <h2>Cost: {averagecost}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
