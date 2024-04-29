import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Car.css";
import { Link } from "react-router-dom";

function Car() {
  const cars = useSelector((store) => store.config.car);

  return (
    <div className="container w-100 h-full flex items-center justify-center">
      <div className="flex justify-center gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="w-[500px] card-version flex flex-col items-center flex-wrap px-12 py-4 shadow-lg rounded-md"
          >
            <div className="flex flex-col ">
              <div className="flex justify-center items-center">
                <h2 className=" text-3xl font-semibold">{car.version}</h2>
                <h3 className="mx-5 text-2xl">{car.price + " €"}</h3>
              </div>
              <hr className="flex mt-3" />
              <div className="flex justify-center">
                <img
                  className="w-100"
                  src={car.picture}
                  alt={"picture " + car.version}
                ></img>
              </div>
            </div>
            <div className="descrip-select flex flex-col items-center gap-4">
              <div className="flex items-end w-100">
                <div className=" flex flex-wrap gap-12 items-start">
                  <div className="flex flex-col items-center">
                    <h4 className="text-slate-400 ">Speed</h4>
                    <h3 className=" text-lg font-semibold">
                      {car.state100 + " from 0 to 100 km/h"}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                  <h4 className="text-slate-400 ">Max Speed</h4>
                  <h3 className="text-lg font-semibold">{car.vMax + " Speed max"}</h3>
                  </div>
                  <div className="flex flex-col items-center">
                  <h4 className="text-slate-400 ">HP</h4>
                  <h3 className="text-lg font-semibold">{car.hp + " HP"}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <Link
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  type="button"
                  id={car.id}
                  to={"/configurator/" + car.id}
                >
                  SELECT
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Car;
