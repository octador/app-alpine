import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Configurator = () => {

  const cars = useSelector((store) => store.config.car);

  return (
    <section
      id="configurator"
      className="container py-[100px] flex items-center justify-center flex-col gap-12"
    >
      <h2 className="font-bold text-2xl md:text-4xl text-center">
        Configurer la Version de Votre Choix
      </h2>
     
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="md:w-[440px]  flex flex-col gap-14 justify-center border-2 border-transparent rounded shadow-2xl py-3 px-6"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center">
                <h2 className="text-xl md:text-3xl font-bold">{car.version}</h2>
                <h3 className="mx-5 text-md md:text-xl font-semibold border-b-2 border-sky-600">{car.price + " €"}</h3>
              </div>
              <hr className="flex mt-3" />
              <div className="flex justify-center mt-6">
                <img
                  className="w-100"
                  src={car.pictureSelect}
                  alt={"picture " + car.version}
                ></img>
              </div>
            </div>
            <div className="descrip-select flex flex-col items-center gap-4">
              <div className="flex items-end w-100">
                <div className=" flex flex-wrap gap-12 justify-center items-start">
                  <div className="flex flex-col items-center">
                    <h4 className="text-slate-400 ">Speed</h4>
                    <h3 className=" text-lg font-semibold">
                      {car.state100 + " from 0 to 100 km/h"}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <h4 className="text-slate-400 ">Max Speed</h4>
                    <h3 className="text-lg font-semibold">
                      {car.vMax + " Speed max"}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <h4 className="text-slate-400 ">HP</h4>
                    <h3 className="text-lg font-semibold">{car.hp + " HP"}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  className="flex justify-center items-center gap-2 text-sky-600 "
                  type="button"
                  id={car.id}
                  to={"/configurator/" + car.id}
                >
                  SELECT
                </Link>
                <Link
                  className="text-sky-600"
                  id={car.id}
                  to={"/configurator/" + car.id}
                >
                  <BiRightArrowAlt size={22} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Configurator;
