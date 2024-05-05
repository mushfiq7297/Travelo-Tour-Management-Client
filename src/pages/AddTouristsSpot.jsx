import "animate.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import {AuthContext} from "../provider/AuthProvider"
const AddTouristsSpot = () => {
   const { user } = useContext(AuthContext);
  const handleAddSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const touristspotsname = form.touristspotsname.value;
    const countryname = form.countryname.value;
    const location = form.location.value;
    const shortdescription = form.shortdescription.value;
    const photourl = form.photourl.value;
    const averagecost = form.averagecost.value;
    const seasonality = form.seasonality.value;
    const traveltime = form.traveltime.value;
    const totavisitorsperyear = form.totavisitorsperyear.value;
    const name = form.name.value;
    const email = form.email.value;

    const addNewSpot = {
      touristspotsname,
      countryname,
      location,
      shortdescription,
      photourl,
      averagecost,
      seasonality,
      traveltime,
      totavisitorsperyear,
      email,
      name,
    };
    console.log(addNewSpot);

    // //sending data to the server
    fetch("http://localhost:5000/addTouristsspot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourists spot added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          const remaining = spots.filter()
        }
      });
  };
  return (
    <div className="w-4/5 mx-auto py-10 px-4 font-stack">
      <form
        onSubmit={handleAddSpot}
        action=""
        className="container flex flex-col mx-auto space-y-12 "
      >
        <div className="space-y-2  text-center ">
          <p className="text-3xl font-bold animate__animated animate__slnameeInLeft">
            ADD TOURISTS SPOT
          </p>
          <p className="text-lg animate__animated animate__slnameeInRight">
            Add your bucket list tourists spot. Travel , make moments, live
            moments and complete yourself.
          </p>
        </div>
        <fieldset className="grname grname-cols-4 gap-6 p-6 rounded-lg shadow-xl  border-2 border-indigo-900 bg-gray-100 animate__animated animate__slnameeInDown">
          <div className="grname grname-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="flex flex-col  md:flex-row  lg:flex-row justify-around">
              <div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-bold">
                    Tourist spots name
                  </label>
                  <input
                    name="touristspotsname"
                    type="text"
                    placeholder="Tourist spots name"
                    className="w-full  text-gray-400 rounded-md p-2 focus:ring p-2-opacity-75 t focus:dark:ring-violet-600 dark:border-gray-300  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-bold">
                    Country name
                  </label>
                  <input
                    name="countryname"
                    type="text"
                    placeholder="Country name"
                    className="w-full   text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-lg font-bold">
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-lg font-bold">
                    Photo URL
                  </label>
                  <input
                    name="photourl"
                    type="text"
                    placeholder="Photo URL"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full ">
                  <label htmlFor="city" className="text-lg font-bold">
                    User name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="w-full flex-1">
                  <label htmlFor="address" className="text-lg font-bold">
                    Short description
                  </label>
                  <input
                    name="shortdescription"
                    type="text"
                    placeholder="Short description"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              </div>
              <div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state" className="text-lg font-bold">
                    Average cost
                  </label>
                  <input
                    name="averagecost"
                    type="text"
                    placeholder="Average cost"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-lg font-bold">
                    Seasonality
                  </label>
                  <input
                    name="seasonality"
                    type="text"
                    placeholder="Seasonality"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-lg font-bold">
                    Travel time
                  </label>
                  <input
                    name="traveltime"
                    type="text"
                    placeholder="Travel time"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-lg font-bold">
                    Total visitors per year
                  </label>
                  <input
                    name="totavisitorsperyear"
                    type="number"
                    placeholder="Total visitors per year"
                    className="w-full  text-gray-400 rounded-md p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-lg font-bold">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full  text-gray-400 rounded-md  p-2 focus:ring p-2-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                
              </div>              
            </div>           
          </div>
        </fieldset>
        <input type="submit" value="Add" className="btn btn-primary"></input>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
