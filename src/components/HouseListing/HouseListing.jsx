import React, { useEffect, useState } from "react";
import perchwell from "../../apis/perchwell";
import HouseCard from './HouseCard';
import './HouseListing.css';

const HouseListing = () => {
  const [listing, setListing] = useState();

  const fetchResults = async () => {
    const response = await perchwell.get('/', {
      params: {
        updated_since: '2022-01-01',
        page_size: 12
      }
    });
    setListing(response.data.listings);
    console.log(response.data.listings);
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="house-listing-section">
      <div className="listing-sortby-dropdown">
        <label id="listing-sortby-label">Sort By: </label>
        <select name="house-sortby-options">
          <option value="most-expeensive">Most-Expensive</option>
          <option value="most-recent">Most Recent</option>
        </select>
      </div>
      <div className="house-listing-cards-collection">
        {listing && listing.length > 0 && (
          listing.map(house => {
            return <HouseCard key={house.id} house={house} />;
          })
        )}
      </div>
    </div>
  );
}

export default HouseListing;
