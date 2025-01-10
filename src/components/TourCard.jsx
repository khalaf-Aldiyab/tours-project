import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-lg">
          ${price}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 text-sm">
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button
            className="text-blue-500 ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;