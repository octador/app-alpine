import React from "react";

import viewPurestandard1 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg";
import viewPurestandard2 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg";
import viewPurestandard3 from "../asset/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg";

import viewPureDinamica1 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg";
import viewPureDinamica2 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg";
import viewPureDinamica3 from "../asset/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg";

import viewLegendBlack1 from "../asset/configurateur/interieurs/vues/cuir-noir-1.jpg";
import viewLegendBlack2 from "../asset/configurateur/interieurs/vues/cuir-noir-2.jpg";
import viewLegendBlack3 from "../asset/configurateur/interieurs/vues/cuir-noir-3.jpg";

import viewPureBrown1 from "../asset/configurateur/interieurs/vues/cuir-brun-1.jpg";
import viewPureBrown2 from "../asset/configurateur/interieurs/vues/cuir-brun-2.jpg";
import viewPureBrown3 from "../asset/configurateur/interieurs/vues/cuir-brun-3.jpg";

import MediaAndNavigatiion from "./MediaAndNavigation";

function DesignSealing({ choiceCar }) {
  return (
    <>
      <div className="flex justify-center gap-4">
        {choiceCar.id === 1 &&
        choiceCar.Sealing.name ===
          "comfort seats in perforated black leather" ? (
          <>
          <div className="flex flex-wrap">

            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPurestandard1}
                alt=" view sealing standard"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPurestandard3}
                alt=" view sealing standard"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPurestandard2}
                alt=" view sealing standard"
                height={"150px"}
              />
            </div>
          </div>

          </>
        ) : null}

        {choiceCar.id === 1 &&
        choiceCar.Sealing.name ===
          "bucket seats in black leatherand dinamica" ? (
          <>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureDinamica1}
                alt=" view sealing diamantica"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureDinamica3}
                alt=" view sealing diamantica"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureDinamica2}
                alt=" view sealing diamantica"
                height={"150px"}
              />
            </div>
          </>
        ) : null}

        {choiceCar.id === 2 &&
        choiceCar.Sealing.name === "comfort seats in black leather" ? (
          <>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="shadow-2xl w-36">
              <img
                className="md:w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewLegendBlack1}
                alt=" view sealing black"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl w-36">
              <img
                className="md:w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewLegendBlack3}
                alt=" view sealing black"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl w-36">
              <img
                className="md:w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewLegendBlack2}
                alt=" view sealing black"
                height={"150px"}
              />
            </div>
            </div>
          </>
        ) : null}

        {choiceCar.id === 2 &&
        choiceCar.Sealing.name === "comfort seats in brown leather" ? (
          <>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureBrown1}
                alt=" view sealing brown"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureBrown3}
                alt=" view sealing brown"
                height={"150px"}
              />
            </div>
            <div className="shadow-2xl">
              <img
                className="w-[320px] shadow-xl rounded-sm cursor-pointer"
                src={viewPureBrown2}
                alt=" view sealing brown"
                height={"150px"}
              />
            </div>
          </>
        ) : null}
      </div>
      <MediaAndNavigatiion choiceCar={choiceCar} />
    </>
  );
}

export default DesignSealing;
