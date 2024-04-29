import Swal from "sweetalert2";

const Lists = ({ TouristsSpot }) => {
  const { _id, touristspotsname, location, countryname } = TouristsSpot;
  const handleDelete = () => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
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
          <button className="btn btn-info">Update</button>
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
