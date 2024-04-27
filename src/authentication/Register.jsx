import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";
import "animate.css"

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegistertError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);
    if (password.length < 6) {
      setRegistertError("Password should be more than 6 character");
      return;
    }
    if(!/[A-Z]/.test(password)){
      setRegistertError("Password should have an uppercase letter");
      return;

    }
    if(!/[a-z]/.test(password)){
      setRegistertError("Password should have a lowercase letter");
      return;

    }
  
    //reset user
    setRegisterSuccess("");
    setRegistertError("");

    //create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setRegisterSuccess(alert("User created successfully"));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegistertError(errorMessage);
      });
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center my-10 animate__animated animate__jackInTheBox">
        <div className="hero">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <h2 className="text-2xl font-bold text-center text-black py-4">
              Register your Account
            </h2>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Your name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered bg-gray-100  text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Your Photo
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo"
                  className="input input-bordered bg-gray-100  text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered bg-gray-100  text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-black font-bold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-gray-100  text-black w-full"
                    required
                  />
                  <span
                    className="absolute top-5 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
                  </span>
                </div>
              </div>

              <div className="flex">
                <label className="flex gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox border" required />
                  <span className="text-sm font-bold">
                    Accept Term & Conditions
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-slate-800  text-white">Register</button>
              </div>
              <p className="text-black text-sm">
                Already have an account?
                <Link className="text-red-500 font-bold" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
            {registerError && (
              <p className="text-red-700 m-4">{registerError}</p>
            )}
            {registerSuccess && (
              <p className="text-green-700 m-4">{registerSuccess}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
