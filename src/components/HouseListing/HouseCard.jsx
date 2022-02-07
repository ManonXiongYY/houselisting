import React from "react";
import './HouseCard.css';

const HouseCard = ({ house }) => {
  console.log(house);
  const { media, location, listing_details, features, unit_details, open_houses } = house;
  const imageSource = media.main_image ?
    media.main_image : media.large_image_list[0];
  
  const renderOpenHouseStartTime = () => {
    if (open_houses && open_houses.length > 0) {
      const time = Date.parse(open_houses[0].start_time);
      const d = new Date(time);
      return d.toLocaleString();
    }
    return 'Not an Open House';
  }

  const renderHouseFeature = () => {
    if (features.new_development) {
      return 'New Development';
    } else if (features.sponsor_unit) {
      return 'Sponsor Unit';
    } else {
      return 'No Specific Feature';
    }
  };

  return (
    <div
      className="house-card-container"
      style={{
        height: '350px',
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="top-left-important-info-label">
        <span className="important-label-text card-text">
          {listing_details.status}
        </span>
      </div>
      <div className="top-left-important-info-label">
        <span className="important-label-text card-text">
          {renderOpenHouseStartTime()}
        </span>
      </div>
      <div className="top-left-important-info-label">
        <span className="important-label-text card-text">
          {renderHouseFeature()}
        </span>
      </div>

      <div className="house-basic-info-container">
        <span className="card-text" id="address-with-unit">
          {location.address_with_unit}
        </span>
        <br />
        <span className="card-text" id="current-price">
          ${listing_details.current_price}/mo
        </span>
        <span className="card-text" id="beds-count">
          {unit_details.beds} BD |
        </span>
        <span className="card-text" id="baths-count">
          {unit_details.full_baths + unit_details.half_baths} BA |
        </span>
        <span className="card-text" id="space-area">
          {unit_details.sqft} FT2
        </span>
        <br />
        <span className="card-text" id="place">
          {location.place}
        </span>
        <span className="card-text" id="property-type">
          {unit_details.property_type}
        </span>
        <a
          href={media.main_floor_plan ? media.main_floor_plan : 'about:blank'}
          style={{ float: 'right' }}>
          <i className="big building icon" ></i>
        </a>
      </div>
    </div>
  );
}

export default HouseCard;
