import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";

const FilterSidebar = () => {
  const [price, setPrice] = useState([0, 25000]);
  const [color, setColor] = useState("");
  const [productType, setProductType] = useState("");
  const [noiseType, setNoiseType] = useState("");
  const [collection, setCollection] = useState("");

  const handlePriceChange = (e, index) => {
    const newPrice = [...price];
    newPrice[index] = e.target.value;
    setPrice(newPrice);
  };

  return (
    <section className="w-full sm:w-72 md:w-80 bg-[#f9f6f1] p-4 sm:p-6 rounded-lg shadow mt-4 sm:mt-5 max-h-[90vh] overflow-y-auto sticky top-24">
      {/* COLOUR */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold uppercase text-sm sm:text-base">
            Colour
          </h3>
          <FaMinus size={12} />
        </div>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border rounded p-2 text-sm"
        >
          <option value="">Select Colour</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Grey">Grey</option>
        </select>
      </div>

      {/* PRICE RANGE */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold uppercase text-sm sm:text-base">
            By Price
          </h3>
          <FaMinus size={12} />
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="25000"
            value={price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full accent-red-500"
          />
          <div className="flex justify-between text-xs sm:text-sm mt-2">
            <span>₹ {price[0]}</span>
            <span>₹ {price[1]}</span>
          </div>
        </div>
      </div>

      {/* PRODUCT TYPE */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold uppercase text-sm sm:text-base">
            Product Type
          </h3>
          <FaMinus size={12} />
        </div>
        <select
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          className="w-full border rounded p-2 text-sm"
        >
          <option value="">Select Product Type</option>
          <option value="Gaming headset">Gaming headset</option>
          <option value="In-Ear headphones">In-Ear headphones</option>
          <option value="On-Ear headphones">On-Ear headphones</option>
          <option value="Over-Ear headphones">Over-Ear headphones</option>
        </select>
      </div>

      {/* NOISE CANCELLING */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold uppercase text-sm sm:text-base">
            Noise Cancelling Type
          </h3>
          <FaMinus size={12} />
        </div>
        <select
          value={noiseType}
          onChange={(e) => setNoiseType(e.target.value)}
          className="w-full border rounded p-2 text-sm"
        >
          <option value="">Select Noise Cancelling</option>
          <option value="Active Noise Cancelling">Active Noise Cancelling</option>
          <option value="Adaptive Noise Cancelling">Adaptive Noise Cancelling</option>
          <option value="True Adaptive Noise Cancelling">
            True Adaptive Noise Cancelling
          </option>
        </select>
      </div>

      {/* COLLECTIONS */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold uppercase text-sm sm:text-base">
            Collections
          </h3>
          <FaMinus size={12} />
        </div>
        <select
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          className="w-full border rounded p-2 text-sm"
        >
          <option value="">Select Collection</option>
          <option value="Endurance">Endurance</option>
          <option value="Live">Live</option>
          <option value="Quantum">Quantum</option>
          <option value="Tour">Tour</option>
          <option value="Tune">Tune</option>
          <option value="Wave">Wave</option>
        </select>
      </div>
    </section>
  );
};

export default FilterSidebar;
