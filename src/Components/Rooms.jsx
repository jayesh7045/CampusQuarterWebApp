import React, { useEffect, useState } from "react";
// import LocationForm from "./LogiLati";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "./Filter";
var count = 0;
function Rooms() {
  const router = useRouter()
  console.log(router)
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [washing, setWashing] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [wifiRooms, setWifiRooms] = useState([]);
  const [washingrooms, setWashingRooms] = useState([]);
  const [combinerooms, setCombineRooms] = useState([]);
  const [temp, setTemp] = useState([]);
  const [area, setArea] = useState("");
  const [dist, setDist] = useState("");
  const [arearoom, setAreaRoom] = useState([])
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");

  useEffect(() => {
    setUser(router.query.username || "");
  }, [router.query.username]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/rooms/getallrooms"
        );
        if (!response) {
          setLoading(true);
        }
        const data = await response.data;
        console.log(data);
        setRooms(data);
        const a = data.filter((room) => {
          return (
            room.washing_machine_availability === "yes" &&
            room.wifi_availability === "yes"
          );
        });
        setCombineRooms(a);

        const b = data.filter((room) => {
          return room.washing_machine_availability === "yes";
        });
        setWashingRooms(b);

        const c = data.filter((room) => {
          return room.wifi_availability === "yes";
        });
        setWifiRooms(c);

        if (wifi && washing) {
          setTemp(a);
        } else if (wifi) {
          setTemp(c);
        } else if (washing) {
          setTemp(b);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  
  return (
    <div>
      {count}
      <div className="text-green-600  font-bold text-[1.8rem] flex justify-center">Welcome {user}</div>
      <div className="flex pt-[1rem] justify-center space-x-8 items-center">
        
      </div>
      <div className="flex justify-center pt-[1rem] pl-[2rem]">
      
      </div>
     
      <div className="flex flex-row w-full space-x-5">
        {console.log(rooms)}
        <Filter
          setWashing={setWashing}
          setWifi={setWifi}
          wifi={wifi}
          washing={washing}
        ></Filter>
        <div className="w-[3/4]">
          {wifi && washing
            ? combinerooms.map((room, index) => (
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={room.images_urls[0]}
                      />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {room.hostel_name}
                      </h1>
                      <p class="mb-8 leading-relaxed">{room.description}</p>
                      <div class="flex justify-center">
                        <a href={`/${room._id}`}>
                          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </a>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            : wifi
            ? wifiRooms.map((room, index) => (
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={room.images_urls[0]}
                      />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {room.hostel_name}
                      </h1>
                      <p class="mb-8 leading-relaxed">{room.description}</p>
                      <div class="flex justify-center">
                        <a href={`/${room._id}`}>
                          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </a>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            : washing
            ? washingrooms.map((room, index) => (
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={room.images_urls[0]}
                      />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {room.hostel_name}
                      </h1>
                      <p class="mb-8 leading-relaxed">{room.description}</p>
                      <div class="flex justify-center">
                        <a href={`/${room._id}`}>
                          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </a>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            : rooms.map((room, index) => (
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={room.images_urls[0]}
                      />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {room.hostel_name}
                      </h1>
                      <p class="mb-8 leading-relaxed">{room.description}</p>
                      <div class="flex justify-center">
                        <a href={`/${room._id}`}>
                          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </a>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
