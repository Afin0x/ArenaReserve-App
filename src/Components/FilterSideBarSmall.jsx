import { useState } from "react";

const FilterSideBarSmall = () => {
  const [price, setPrice] = useState(250);
  return (
    <div className="margin-top ">
      <div className="modern-filter-card">
        <h3 className="filter-title">Filters</h3>

        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <select id="location">
            <option>Select</option>
            <option>Kannur</option>
            <option>Calicut</option>
            <option>Dubai</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price">Max Price: ₹{price}</label>
          <input
            type="range"
            id="price"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Sport</label>
          <div className="checkbox-list">
            {["Football", "Cricket", "Tennis", "Basketball"].map((sport) => (
              <label key={sport}>
                <input type="checkbox" />
                <span>{sport}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBarSmall;
