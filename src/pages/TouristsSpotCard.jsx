const TouristsSpotCard = ({ TouristsSpot }) => {
  const { photourl,location,countryname,touristspotsname,shortdescription  } = TouristsSpot;
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
            <h5>{location}, {countryname}</h5>
          <h2 className="card-title">{touristspotsname}</h2>
          <p>{shortdescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotCard;
