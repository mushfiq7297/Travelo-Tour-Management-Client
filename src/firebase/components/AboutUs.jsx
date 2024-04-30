import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="hero h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/dBDRkny/ts-1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            A Better Way of Traveling and Touring the World
          </h1>
          <p className="mb-5">
          Today, booking the right tour or holiday package has become a time consuming and painful process. Which tour operator is qualified? What’s the right tour price? When you pay an upfront deposit to an unknown tour operator, is your money safe? Are the reviews seen on a local operators website genuine?
          </p>
          <Link to={`/contact`}>
          <button className="btn btn-primary">Contuct Us</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
