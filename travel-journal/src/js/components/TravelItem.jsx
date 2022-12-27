import React from 'react';

import locationIcon from '../../assets/location-icon.png';

export default function TravelItem(props) {
  return (
    <div className="travel-item">
      <img
        src={props.img}
        alt="travel-item-image"
        className="item-img"
      />

      <div className="item-details">
        <img
          src={locationIcon}
          alt="location-icon"
          className="location-icon"
        />

        <p className="item-location">{props.location}</p>
        <a href={props.link} className="item-link">View on Google Maps</a>

        <h3 className="item-title">{props.title}</h3>

        <p className="item-dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="item-description">
          {props.description}
        </p>
      </div>
    </div>
  );
}