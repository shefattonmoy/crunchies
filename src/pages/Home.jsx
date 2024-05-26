import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
    </div>
  );
};

export default Home;