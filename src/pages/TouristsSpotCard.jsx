import { MdOutlinePeople } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const TouristsSpotCard = ({ TouristsSpot}) => {
  const {
    _id,
    photourl,
    touristspotsname,
    averagecost,
    seasonality,
    traveltime,
    totavisitorsperyear,
  } = TouristsSpot;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={photourl}
            alt="Shoes"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="flex text-xl font-bold">{touristspotsname}</h2>
          <div className="flex gap-4">
            <p className="flex gap-1 my-1">
              <MdOutlinePeople className="my-1" />
              {totavisitorsperyear}
            </p>
            <p className="flex gap-1 my-1">
              <IoMdTime className="my-1" />
              {traveltime}
            </p>
          </div>

          <div className="flex gap-4">
            <h2 className="text-xl font-bold">{averagecost}</h2>
            <p className=" flex gap-1 my-1 text-primary">{seasonality}</p>
          </div>

          <Link to={`/viewDetailsPage/${_id}`}>
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotCard;
