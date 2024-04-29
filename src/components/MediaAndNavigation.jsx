import React from "react";

import alpineTelemetrics from "../asset/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg";

import focalAudioSystem from "../asset/configurateur/equipements/categories/media et navigation/audio-focal.jpg";

import focalPremiumAudioSystem from "../asset/configurateur/equipements/categories/media et navigation/audio-premium.jpg";

import standardAudioSystem from "../asset/configurateur/equipements/categories/media et navigation/audio-standard.jpg";
import { useDispatch } from "react-redux";
import { changeMedia } from "../feactures/alpine/AlpineSlice";
import Comfort from "./Comfort";

function MediaAndNavigation({ choiceCar }) {
  const dispatch = useDispatch();
  const handlemedia = (name, price) => {
    dispatch(
      changeMedia({
        idCar: choiceCar.id,
        name: name,
        price: price,
      })
    );
  };
  return (
    <>
      <div id="color_title" className="flex text-center justify-center items-center">
        <h1 className="md:text-4xl text-3xl font-semibold">Choose Media and Navigation</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="shadow-2xl p-2 w-fit">
          <img
            className="w-[200px] cursor-pointer"
            src={standardAudioSystem}
            alt="standard audio system"
            height={"150px"}
            onClick={() => handlemedia("standard audio system", 0)}
          />
          <p className="font-medium text-lg text-center">Standard audio system</p>
          <p className="font-bold text-xl text-center">0 €</p>
        </div>

        <div className="shadow-2xl p-2 w-fit">
          <img
            className="w-[200px] cursor-pointer"
            src={alpineTelemetrics}
            alt="alpine Telemetrics"
            height={"150px"}
            onClick={() => handlemedia("alpine telemetrics", 204)}
          />
          <p className="font-medium text-lg text-center">Alpine Telemetrics</p>
          <p className="font-bold text-xl text-center">204 €</p>
        </div>
        <div className="shadow-2xl p-2 w-fit">
          <img
            className="w-[200px] cursor-pointer"
            src={focalAudioSystem}
            alt="focalAudioSystem"
            height={"150px"}
            onClick={() => handlemedia("focal audio system", 600)}
          />
          <p className="font-medium text-lg text-center">Focal audio system</p>
          <p className="font-bold text-xl text-center">600 €</p>
        </div>
        <div className="shadow-2xl p-2 w-fit">
          <img
            className="w-[200px] cursor-pointer"
            src={focalPremiumAudioSystem}
            alt="focal premium audio system"
            height={"150px"}
            onClick={() => handlemedia("focal premium audio system", 1200)}
          />
          <p className="font-medium text-lg text-center">Focal premium audio <br/> system</p>
          <p className="font-bold text-xl text-center">1200 €</p>
        </div>
      </div>
      <Comfort choiceCar={choiceCar} />
    </>
  );
}

export default MediaAndNavigation;
