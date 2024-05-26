import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">Crunchies</h1>
          <p className="mb-5">
          We bring delectable cuisine crafted with locally sourced ingredients, offering a delightful fusion of flavors in a cozy atmosphere.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
