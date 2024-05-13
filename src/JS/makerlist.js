import React from 'react';

function LocationList({ locations, handleLocationClick }) {
  return (
    <div className="location-list">
      <h2>Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index} onClick={() => handleLocationClick(location)}>
            {location.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
