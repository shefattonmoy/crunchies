import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EditProducts = () => {
  const food = useLoaderData();

  const [title, setTitle] = useState(food.title);
  const [price, setPrice] = useState(food.price);
  const [type, setType] = useState(food.type);
  const [id, setId] = useState(food.id);
  const [description, setDescription] = useState(food.description);
  const [image_url, setImageURL] = useState(food.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const updatedId = form.id.value;
      const updatedTitle = form.title.value;
      const updatedType = form.type.value;
      const updatedPrice = form.price.value;
      const updatedDescription = form.description.value;
      const updatedImageURL = form.image_url.value;

      const data = {
        id: updatedId,
        title: updatedTitle,
        type: updatedType,
        price: updatedPrice,
        description: updatedDescription,
        image_url: updatedImageURL,
      };

      const response = await fetch(`http://localhost:3000/foods/${food.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Product updated successfully");
      } else {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={image_url}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;