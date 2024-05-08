import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
        <h2 className="text-center font-bold text-3xl md:text-6xl font-stack my-12">About Us</h2>
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-10 justify-between">
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/dBDRkny/ts-1.jpg"
            className=" rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              A Better Way of Traveling and Touring the World
            </h1>
            <p className="mb-5">
              Today, booking the right tour or holiday package has become a time
              consuming and painful process. Which tour operator is qualified?
              What’s the right tour price? When you pay an upfront deposit to an
              unknown tour operator, is your money safe? Are the reviews seen on
              a local operators website genuine?
            </p>
            <Link to={`/contact`}>
              <button className="btn btn-primary">Contuct Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
