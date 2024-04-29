import React from "react";
import { useDispatch } from "react-redux";

import rimStandardCarWhite from "../asset/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg";
import rimSeracCarWhite from "../asset/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg";
import rimLegendCarWhite from "../asset/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg";

import rimStandardCarBlack from "../asset/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg";
import rimSeracCarBlack from "../asset/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg";
import rimLegendCarBlack from "../asset/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg";

import rimStandardCarBlue from "../asset/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg";
import rimSeracCarBlue from "../asset/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg";
import rimLegendCarblue from "../asset/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg";
import Sealing from "./Sealing";
import { rimColor } from "../feactures/alpine/AlpineSlice";

function RimColor({ choiceCar }) {
  // console.log(choiceCar.color.slug);
  const dispatch = useDispatch();
  const handleRimColor = (name, slug) => {
    dispatch(
      rimColor({
        idCar: choiceCar.id,
        name: name,
        slug: slug,
      })
    );
  };
  return (
    <>
      <div className="flex justify-center">
        {choiceCar.color.slug === "white" ? (
          <div>
            {choiceCar.color.slug === "white" &&
            choiceCar.rims.name === "standard" ? (
              <img
                className="w-[420px]"
                src={rimStandardCarWhite}
                alt="rims white"
                height={"250px"}
                onClick={() => handleRimColor("standard", "white")}
              />
            ) : null}

            {choiceCar.color.slug === "white" &&
            choiceCar.rims.name === "serac" ? (
              <img
                className="w-[420px]"
                src={rimSeracCarWhite}
                alt="rims white"
                height={"250px"}
                onClick={() => handleRimColor("serac", "white")}
              />
            ) : null}

            {choiceCar.color.slug === "white" &&
            choiceCar.rims.name === "legend" ? (
              <img
                className="w-[420px]"
                src={rimLegendCarWhite}
                alt="rims white"
                height={"250px"}
                onClick={() => handleRimColor("legend", "white")}
              />
            ) : null}
          </div>
        ) : null}

        {choiceCar.color.slug === "black" ? (
          <div>
            {choiceCar.color.slug === "black" &&
            choiceCar.rims.name === "standard" ? (
              <img
                className="w-[420px]"
                src={rimStandardCarBlack}
                alt="rims black"
                height={"250px"}
                onClick={() => handleRimColor("standard", "black")}
              />
            ) : null}

            {choiceCar.color.slug === "black" &&
            choiceCar.rims.name === "serac" ? (
              <img
                className="w-[420px]"
                src={rimSeracCarBlack}
                alt="rims black"
                height={"250px"}
                onClick={() => handleRimColor("serac", "black")}
              />
            ) : null}

            {choiceCar.color.slug === "black" &&
            choiceCar.rims.name === "legend" ? (
              <img
                className="w-[420px]"
                src={rimLegendCarBlack}
                alt="rims black"
                height={"250px"}
                onClick={() => handleRimColor("legend", "black")}
              />
            ) : null}
          </div>
        ) : null}

        {choiceCar.color.slug === "blue" ? (
          <div>
            {choiceCar.color.slug === "blue" &&
            choiceCar.rims.name === "standard" ? (
              <img
                className="w-[420px]"
                src={rimStandardCarBlue}
                alt="rims blue"
                height={"250px"}
                onClick={() => handleRimColor("standard", "blue")}
              />
            ) : null}

            {choiceCar.color.slug === "blue" &&
            choiceCar.rims.name === "serac" ? (
              <img
                className="w-[420px]"
                src={rimSeracCarBlue}
                alt="rims blue"
                height={"250px"}
                onClick={() => handleRimColor("serac", "blue")}
              />
            ) : null}

            {choiceCar.color.slug === "blue" &&
            choiceCar.rims.name === "legend" ? (
              <img
                className="w-[420px]"
                src={rimLegendCarblue}
                alt="rims blue"
                height={"250px"}
                onClick={() => handleRimColor("legend", "blue")}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    
      <Sealing choiceCar={choiceCar} />
    </>

  );
}

export default RimColor;
