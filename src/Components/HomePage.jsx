import React from "react";
import Button from "@/pages/Layouts/Button";
import { useRouter } from "next/router";
function HomePage() {
  const router = useRouter();
  const handleClickEvent=()=>{
    const temp1 = JSON.parse(localStorage.getItem('username'))
    console.log(temp1);
    
    const username = temp1.username
    console.log(username);
    router.push({pathname : '/rooms', query : {username}})
  }
  return (
    <div>
      <div className="flex flex-row justify-between w-full ">
        <div className="w-1/2">
          <div className="text-[2.5rem] tracking-wider font-sans [word-spacing:0.5rem] font-bold pt-[15rem] pl-[8rem] pr-[4rem] flex items-center flex-col justify-center">
            <div>
              Welcome to the <span className="text-blue-600">PCCOER</span>{" "}
              Campus Quarters
              <div className="flex justify-center pr-[12rem] pt-[1rem] ">
               <button onClick = {handleClickEvent} class="bg-blue-500 text-[1.5rem] flex justify-center w-[10rem] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Explore
                </button>
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
