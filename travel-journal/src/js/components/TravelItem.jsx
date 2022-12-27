import React from 'react';

export default function TravelItem(props) {
  return (
    <div className="travel-item">
      <img
        src={props.img}
        alt="travel-item-image"
        className="item-img"
      />

      <div className='item-details'>
        <span className='material-symbols-outlined location-icon'>location_on</span>

        <p className="item-location">{props.location}</p>
        <a
          href={props.link}
          target="_blank"
          className="item-link"
        >
          View on Google Maps
        </a>
      </div>

      <h3 className="item-title">{props.title}</h3>

      <p className="item-dates">
        {props.startDate} - {props.endDate}
      </p>
      <p className="item-description">
        {props.description}
      </p>
    </div>
  );
}