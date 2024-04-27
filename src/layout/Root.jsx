import { Outlet } from "react-router-dom";
import Navbar from "../firebase/components/Navbar";
import Footer from "../firebase/components/Footer";



const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mx-auto h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
