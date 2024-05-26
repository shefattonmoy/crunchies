import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteProducts = () => {
  const food = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/foods/${food.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Product deleted successfully");
      } else {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Delete Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <p>Are you sure you want to delete this product?</p>
          <div className="mt-2 flex justify-center items-center">
            <button
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
            >
              Delete Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteProducts;