import React, { useEffect, useState } from "react";
import axios from "axios";
import HostelList from "./MyComponent";
const LocationForm = () => {
  const [locationName1, setLocationName1] = useState("");
  const [locationName2, setLocationName2] = useState("");
  const [newRooms, setNewRooms] = useState([]);
  const [dist, setDist] = useState(5);
  
  const [coordinates1, setCoordinates1] = useState({
    latitude: null,
    longitude: null,
  });
  const [coordinates2, setCoordinates2] = useState({
    latitude: null,
    longitude: null,
  });
  
  

  useEffect(() => {
    console.log("Hello");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/rooms/getallrooms"
        );

        if (!response) {
          setLoading(true);
        } 
        const data = await response.data;
        console.log(data);
        setNewRooms(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
    return distance;// Convert to meters
  };


  const handleLocationSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getCoordinates?location=${encodeURIComponent(
          locationName1
        )}`
      );
      const response2 = await axios.get(
        `http://localhost:5000/getCoordinates?location=${encodeURIComponent(
          locationName2
        )}`
      );
      console.log(response.data);

      setCoordinates1({
        latitude: response.data.latitude,
        longitude: response.data.longitude,
      });

      setCoordinates2({
        latitude : response2.data.latitude,
        longitude : response2.data.longitude
      })

      return calculateDistance(coordinates1, coordinates2);
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
    }
  };

  const getResults=()=>{
    setLocationName1("Akurdi Railway Station");
    const newRooms_ = newRooms.filter((room, index)=>{
      setLocationName2("PCCOE")
      console.log(handleLocationSubmit())
      return handleLocationSubmit()>5
    })
    setNewRooms(newRooms_)
  }
  return (
    <div>
      <input type="text" value={locationName1} onChange={(e)=>setLocationName1(e.target.value)}/>
      <button onClick={getResults}>Search</button>
      {newRooms && newRooms.map((room, index)=>(<div>{room.hostel_name}</div>))}
    </div>
  );
};

export default LocationForm;
