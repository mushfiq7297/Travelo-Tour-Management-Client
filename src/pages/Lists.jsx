import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Lists = ({ TouristsSpot, spots,setSpots }) => {
  const { _id, touristspotsname, location, countryname } = TouristsSpot;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addTouristsspot/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
              "Your Spot has been deleted.",
                "success",
              );
              const remaining = spots.filter(spot => spot._id = _id)
              setSpots(remaining)

            }
          });
      }
    });
  };
  return (
    <div>
      {/* row 1 */}
      <tr className="hover flex justify-between ">
        <td className="flex justify-center items-center  w-1/5">
          {touristspotsname}
        </td>
        <td className="flex justify-center items-center w-1/5">{location}</td>
        <td className="flex justify-center items-center  w-1/5">
          {countryname}
        </td>
        <td className="flex justify-center items-center w-1/5">
          <Link to={`/updatePage/${_id}`}>
          <button className="btn btn-info">Update</button>
          </Link>
        </td>
        <td className="flex justify-center items-center w-1/5">
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Lists;
