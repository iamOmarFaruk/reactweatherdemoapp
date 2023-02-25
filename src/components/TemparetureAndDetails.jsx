import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSunset,
  UilCloudSunRainAlt,
  UilSun,
} from "@iconscout/react-unicons";

function TemparetureAndDetails() {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-around text-white py-3">
        <div>
          <UilCloudSunRainAlt size={60} />
        </div>
        <div>
          <p className="text-5xl">34 &#176;</p>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1"> 38 &#176;</span>
          </div>

          <div className="flex font-light text-sm items-center justify-start">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-start">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1"> 11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
       
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">06:45 AM</span>
          </p>
          <p>|</p>
        

       
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">06:45 AM</span>
          </p>
          <p>|</p>
       

      
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">06:45 AM</span>
          </p>
       


      </div>
    </>
  );
}

export default TemparetureAndDetails;
