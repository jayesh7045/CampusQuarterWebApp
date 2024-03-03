import React from "react";
import Button from "@/pages/Layouts/Button";
function HomePage() {
  return (
    <div>
      <div className="flex flex-row justify-between w-full ">
        <div className="w-1/2">
          <div className="text-[2.5rem] tracking-wider font-sans [word-spacing:0.5rem] font-bold pt-[15rem] pl-[8rem] pr-[4rem] flex items-center flex-col justify-center">
            <div>
              Welcome to the <span className="text-blue-600">PCCOER</span>{" "}
              Campus Quarters
              <div className="flex justify-center pr-[12rem] pt-[1rem] ">
                <a href="/rooms"><button class="bg-blue-500 text-[1.5rem] flex justify-center w-[10rem] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Explore
                </button></a>
              </div>
            </div>
          </div>
        </div>
        <img src="Images/hostelmainpage.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
