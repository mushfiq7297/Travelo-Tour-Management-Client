import { Outlet } from "react-router-dom";
import Navbar from "../firebase/components/Navbar";
import Footer from "../firebase/components/Footer";



const Root = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="mx-auto min-h-[calc(100vh-160px)]">
        <Outlet></Outlet>
      </div>
      <div className=" h-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
