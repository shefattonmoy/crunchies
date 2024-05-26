/* eslint-disable react/prop-types */
import { useState } from "react";
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount(data.length); 
  };

  return (
    <div>
      <h1 className="my-8 text-4xl font-bold text-center">Our Menus</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 justify-center items-center">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, visibleCount).map((food) => (
            <SingleProduct key={food.id} food={food} />
          ))
        }
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleSeeMore} 
            className="btn btn-primary mb-8 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;