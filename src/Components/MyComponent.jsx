import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AkurdiRailwayStationCoordinates = { lat: 18.64904, lng: 73.76527};

const HostelList = ({lat1, longi1, lat2, longi2, dist, setRooms, rooms}) => {
  const [hostels, setHostels] = useState([]);
  // Function to calculate distance between two sets of coordinates using Haversine formula
  const coord1 = {"lat" : lat1, "lng" : longi1}
  const coord2 = {"lat" : lat2, "lng" :  longi2}



  const calculateDistance = (coord1, coord2) => {
    const earthRadius = 6371; // Earth's radius in kilometers

    const degToRad = (deg) => deg * (Math.PI / 180);

    const dLat = degToRad(coord2.lat - coord1.lat);
    const dLng = degToRad(coord2.lng - coord1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(coord1.lat)) * Math.cos(degToRad(coord2.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // Distance in kilometers
    return distance * 1000; // Convert to meters
  };
 
const ans = calculateDistance(coord1, coord2);
  return (
    <div>
      {/* <h2>Hostels and PGs near Akurdi Railway Station</h2> */}
      {/* <h1>{ans/1000}</h1> */}
      {/* <ul>
        {filteredHostels.map((hostel, index) => (
          <li key={index}>
            {hostel.name} - Distance: {calculateDistance(coord1, hostel.coordinates)} meters
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default HostelList;
