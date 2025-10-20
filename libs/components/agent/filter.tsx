import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import React, { useState } from "react";

const CarFilter: NextPage = () => {
  const [price, setPrice] = useState<number[]>([0, 50000]);
  const [year, setYear] = useState<number[]>([2000, 2025]);
  const [km, setKm] = useState<number[]>([100, 1000000]);

  const handleRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "price" | "year" | "km",
    index: number
  ) => {
    const val = Number(e.target.value);
    if (type === "price") {
      const newRange = [...price];
      newRange[index] = val;
      setPrice(newRange);
    }
    if (type === "year") {
      const newRange = [...year];
      newRange[index] = val;
      setYear(newRange);
    }
    if (type === "km") {
      const newRange = [...km];
      newRange[index] = val;
      setKm(newRange);
    }
  };

  return (
    <div className="filter-box">
      <div className="filter-header">
        <h2>Filters and Sort</h2>
        <button className="clear-btn">Clear</button>
      </div>

      {/* Dropdowns */}
      {[
        "Make",
        "Models",
        "Body",
        "Fuel type",
        "Transmission",
        "Driver type",
        "Door",
        "Cylinder",
        "Color",
      ].map((label) => (
        <div className="dropdown" key={label}>
          <label>{label}</label>
          <select>
            <option value="">Select {label}</option>
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
          </select>
        </div>
      ))}

      {/* Price Range */}
      <div className="range-box">
        <p>
          <strong>Price:</strong> ${price[0].toLocaleString()} — $
          {price[1].toLocaleString()}
        </p>
        <input
          type="range"
          min={0}
          max={50000}
          value={price[0]}
          onChange={(e) => handleRangeChange(e, "price", 0)}
        />
        <input
          type="range"
          min={0}
          max={50000}
          value={price[1]}
          onChange={(e) => handleRangeChange(e, "price", 1)}
        />
      </div>

      {/* Year Range */}
      <div className="range-box">
        <p>
          <strong>Year:</strong> {year[0]} — {year[1]}
        </p>
        <input
          type="range"
          min={2000}
          max={2025}
          value={year[0]}
          onChange={(e) => handleRangeChange(e, "year", 0)}
        />
        <input
          type="range"
          min={2000}
          max={2025}
          value={year[1]}
          onChange={(e) => handleRangeChange(e, "year", 1)}
        />
      </div>

      {/* KM Range */}
      <div className="range-box">
        <p>
          <strong>km:</strong> {km[0].toLocaleString()} —{" "}
          {km[1].toLocaleString()}
        </p>
        <input
          type="range"
          min={100}
          max={1000000}
          step={1000}
          value={km[0]}
          onChange={(e) => handleRangeChange(e, "km", 0)}
        />
        <input
          type="range"
          min={100}
          max={1000000}
          step={1000}
          value={km[1]}
          onChange={(e) => handleRangeChange(e, "km", 1)}
        />
      </div>

      {/* Featured */}
      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Featured
        </label>
        <h3>Featured</h3>
        {[
          "A/C: Front",
          "Backup Camera",
          "Cruise Control",
          "Navigation",
          "Power Locks",
          "Audio system",
          "Touchscreen display",
          "GPS navigation",
          "Phone connectivity",
          "In-car Wi-Fi",
          "Chrome-plated grill",
          "Smart headlight cluster",
          "Premium wheels",
          "Body character lines",
          "High-quality paint",
        ].map((item) => (
          <label key={item}>
            <input type="checkbox" /> {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CarFilter;
