import "animate.css"

const AddTouristsSpot = () => {
    const handleAddSpot = event =>{
        event.preventDefault();
        
        const form = event.target;
    }
  return (
    <div className="w-full mx-auto py-10 px-4">
      <form
      onSubmit={handleAddSpot}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 "
      >
        <div className="space-y-2  text-center ">
          <p className="text-3xl font-bold animate__animated animate__slideInLeft">ADD TOURISTS SPOT</p>
          <p className="text-lg animate__animated animate__slideInRight">
            Add your bucket list tourists spot. Travel , make moments, live
            moments and complete yourself.
          </p>
        </div>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl  hover:border-2 border-indigo-900 bg-gray-100 animate__animated animate__slideInDown">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-lg font-bold">
                Tourist spots name
              </label>
              <input
                id="Touristspotsname"
                type="text"
                placeholder="Tourist spots name"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-bold">
                Country name
              </label>
              <input
                id="Countryname"
                type="text"
                placeholder="Country name"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-lg font-bold">
                Location
              </label>
              <input
                id="Location"
                type="text"
                placeholder="Location"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-lg font-bold">
                Short description
              </label>
              <input
                id="Shortdescription"
                type="text"
                placeholder="Short description"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-lg font-bold">
                Photo URL
              </label>
              <input
                id="photourl"
                type="text"
                placeholder="Photo URL"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-lg font-bold">
                Average cost
              </label>
              <input
                id="Averagecost"
                type="text"
                placeholder="Average cost"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-lg font-bold">
                Seasonality
              </label>
              <input
                id="Seasonality"
                type="text"
                placeholder="Seasonality"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-lg font-bold">
                Travel time
              </label>
              <input
                id="Traveltime"
                type="text"
                placeholder="Travel time"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-lg font-bold">
                Total visitors per year
              </label>
              <input
                id="TotaVisitorsPerYear"
                type="number"
                placeholder="Total visitors per year"
                className="w-full rounded-md p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-lg font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-lg font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-md  p-2 focus:ring p-2-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <input
              type="submit"
              value="Add"
              className="btn btn-primary"
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
