import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page ">
      <div className="flex-col justify-center items-center text-center lg:my-60 ">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="text-xl font-bold">Page not found</p>
        <Link to="/">
          <a
            href="#_"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            Button Text
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
