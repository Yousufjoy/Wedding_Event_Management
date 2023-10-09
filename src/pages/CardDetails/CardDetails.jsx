import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const result = data.find((d) => d.id == id);

  const { name, description, image, price } = result;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 border rounded-lg shadow-lg custom-theme">
        {/* Product Image */}
        <img src={image} alt="Product" className="w-full h-auto mb-4" />

        {/* Product Name */}
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>

        {/* Product Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Product Price */}
        <p className="text-xl font-semibold mb-4">{price}</p>

        {/* Add to Cart Button */}
        <button className="btn ">Book Now!</button>
      </div>
    </div>
  );
};

export default CardDetails;
