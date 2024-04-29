import React from "react";
import electrochromicInteriorMirror from "../asset/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg";
import electricfoldingheatedexteriormirrors from "../asset/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg";
import storagepack from "../asset/configurateur/equipements/categories/confort/pack-rangement.jpg";
import { useDispatch } from "react-redux";
import { selectOption } from "../feactures/alpine/AlpineSlice";
import cruisecontrolspeedlimiter from "../asset/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg";
import arParkingAssistance from "../asset/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg";
import frontAndRearParkingAssistance from "../asset/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg";
import frontRearParkingAssistanceAndReversingCamera from "../asset/configurateur/equipements/categories/conduite/camera-recul.jpg";
import activeSportExhaust from "../asset/configurateur/equipements/categories/conduite/echappement-sport.jpg";
import highPerf320mmBrakingSystem from "../asset/configurateur/equipements/categories/securite/freinage-haute-perf.jpg";
import emergencyBrakingAssistance from "../asset/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg";
import driverAndPassengerFrontAirbags from "../asset/configurateur/equipements/categories/securite/airbag.jpg";
import alpineBlueColorBrakeCalipers from "../asset/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg";
import alpineLogoOnTheFrontFenders from "../asset/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg";
import brakeCalipersInAnthraciteGrayColor from "../asset/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg";
import aluminumCrankset from "../asset/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg";
import matteCarbonHarmony from "../asset/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg";
import logoInTheCenterOfTheSteeringWheelInAlpineBlue from "../asset/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg";
import heatedSeats from "../asset/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg";
import heritagePack from "../asset/configurateur/equipements/categories/design/pack-heritage.jpg";
import aluminumpassengerfootrest from "../asset/configurateur/equipements/categories/design/repose-pied-alu.jpg";
import ConfigCard from "./ConfigCard";

function Comfort({ choiceCar }) {
  const dispatch = useDispatch();

  const haldleSelect = (name, price, type, classement) => {
    dispatch(
      selectOption({
        idCar: choiceCar.id,
        name: name,
        price: price,
        type: type,
        id: classement,
      })
    );
  };

  return (
    <section className="py-8">
      <div className="flex container-card-option container flex-wrap justify-center gap-6">
        <div className="flex flex-col flex-wrap gap-5">
          {/* design */}
          <div className="flex flex-col md:flex-row items-center px-3 gap-3">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Design</h1>
            </div>
            <div className="flex gap-3 w-[90%] ">
              <div className="flex flex-col items-center gap-3 shadow-xl card-option p-1">
                <img
                  className=" md:w-[190px]"
                  src={aluminumpassengerfootrest}
                  alt="Aluminum passenger footrest"
                  // height={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Aluminum passenger footrest", 96, "design", 1)
                  }
                />
                <div className="flex flex-column align-items-center">
                  <label
                    className="text-center"
                    for="Aluminum passenger footrest"
                  >
                    Aluminum passenger <br /> footrest
                  </label>
                  <p className="font-semibold text-lg">96 €</p>
                </div>
              </div>

              <div className="flex flex-column gap-3 shadow-xl card-option p-1">
                <img
                  className=" md:w-[190px]"
                  src={heritagePack}
                  alt="Heritage Pack"
                  // height={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Heritage Pack", 180, "design", 2)
                  }
                />
                <div className="flex flex-column align-items-center">
                  <label for="Heritage Pack">Heritage Pack</label>
                  <p className="font-semibold text-lg">180 €</p>
                </div>
              </div>
            </div>
          </div>
          {/* comfort */}
          <div className="flex flex-col md:flex-row gap-2 items-center px-2">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Comfort</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-3 w-[90%]">
              <div className="flex  flex-column gap-3 items-center shadow-xl card-option p-1">
                <img
                  className="w-[190px]"
                  src={electrochromicInteriorMirror}
                  alt="Electrochromic interior mirror"
                  // height={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Electrochromic interior mirror",
                      180,
                      "comfort",
                      1
                    )
                  }
                />
                <div className="flex flex-column items-center">
                  <label
                    className="text-center"
                    for="electrochromicInteriorMirror"
                  >
                    Electrochromic interior <br /> mirror
                  </label>
                  <p className="font-semibold text-lg">180 €</p>
                </div>
              </div>

              <div className="flex  flex-column items-center p-1 gap-2 shadow-xl card-option ">
                <img
                  className="w-[190px]"
                  src={electricfoldingheatedexteriormirrors}
                  alt="Electric folding heated exterior mirrors"
                  type="radio"
                  // height={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Electric folding heated exterior mirrors",
                      504,
                      "comfort",
                      2
                    )
                  }
                />
                <div className="flex flex-column items-center">
                  <label
                    className="text-center"
                    for="electricfoldingheatedexteriormirrors"
                  >
                    Electric folding heated <br /> exterior mirrors
                  </label>
                  <p className="font-semibold text-lg">504 €</p>
                </div>
              </div>

              <div className="flex flex-column items-center p-1 gap-2 shadow-xl card-option ">
                <img
                  className="w-[190px]"
                  src={storagepack}
                  alt="Storage pack"
                  // height={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Storage pack", 504, "comfort", 3)
                  }
                />
                <div className="flex flex-column items-center">
                  <label for="storagepack">Storage pack</label>
                  <p className="font-semibold text-lg">504 €</p>
                </div>
              </div>

              <div className="flex  flex-column items-center gap-2 p-1 shadow-xl card-option ">
                <img
                  className="w-[190px]"
                  src={cruisecontrolspeedlimiter}
                  alt="Cruise control/speed limiter"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Cruise control/speed limiter",
                      0,
                      "comfort",
                      4
                    )
                  }
                />
                <div className="flex flex-column items-center">
                  <label for="cruisecontrolspeedlimiter">
                    Cruise control/speed limiter
                  </label>
                  <p className="font-semibold text-xl">O €</p>
                </div>
              </div>
            </div>
          </div>
          {/* conduit */}
          <div className="flex flex-col md:flex-row gap-3 items-center px-2">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Conduct</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-2 w-[90%]">
              <div className="flex  flex-column items-center p-1 gap-2 shadow-xl card-option ">
                <img
                  className="w-[190px]"
                  src={arParkingAssistance}
                  alt="AR parking assistance"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("AR parking assistance", 420, "conduct", 1)
                  }
                />
                <div className="flex flex-column items-center">
                  <label for="arParkingAssistance">AR parking assistance</label>
                  <p className="font-semibold text-xl">420 €</p>
                </div>
              </div>

              <div className="flex flex-column items-center p-1 gap-2 shadow-xl card-option ">
                <img
                  className="w-[190px]"
                  src={frontAndRearParkingAssistance}
                  alt="Front and rear parking assistance"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Front and rear parking assistance",
                      750,
                      "conduct",
                      2
                    )
                  }
                />
                <div className="flex flex-column items-center ">
                  <label
                    className="text-center"
                    for="frontAndRearParkingAssistance"
                  >
                    Front and rear parking <br /> assistance
                  </label>
                  <p className="font-semibold text-xl">750 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl card-option items-center">
                <img
                  className="w-[190px]"
                  src={frontRearParkingAssistanceAndReversingCamera}
                  alt="Front rear parking assistance and reversing camera"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Front and rear parking assistance",
                      1200,
                      "conduct",
                      3
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="frontRearParkingAssistanceAndReversingCamera"
                  >
                    Front rear parking assistance <br /> and reversing camera
                  </label>
                  <p className="font-semibold text-lg">1200 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={activeSportExhaust}
                  alt="Active Sport Exhaust"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Active Sport Exhaust", 1500, "conduct", 4)
                  }
                />
                <div className="flex flex-col items-center">
                  <label for="activeSportExhaust">Active Sport Exhaust</label>
                  <p className="font-semibold text-xl">1500 €</p>
                </div>
              </div>
            </div>
          </div>
          {/* sécurity */}
          <div className="flex flex-col md:flex-row gap-3 items-center px-2">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Safety</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-[90%]">
              <div className="flex flex-column p-1 gap-2 shadow-xl card-option items-center ">
                <img
                  className="w-[190px]"
                  src={highPerf320mmBrakingSystem}
                  alt="High-Perf 320mm braking system"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "High-Perf 320mm braking systemt",
                      1000,
                      "security",
                      1
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="highPerf320mmBrakingSystem"
                  >
                    High-Perf 320mm <br /> braking system
                  </label>
                  <p className="font-semibold text-lg">1000 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl card-option items-center">
                <img
                  className="w-[190px]"
                  src={emergencyBrakingAssistance}
                  alt="Emergency braking assistance"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Emergency braking assistance",
                      0,
                      "security",
                      2
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="emergencyBrakingAssistance"
                  >
                    Emergency braking <br /> assistance
                  </label>
                  <p className="font-semibold text-lg"> 0 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl card-option items-center">
                <img
                  className="w-[190px]"
                  src={driverAndPassengerFrontAirbags}
                  alt="Driver and passenger front airbags"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Driver and passenger front airbags",
                      0,
                      "security",
                      3
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="driverAndPassengerFrontAirbags"
                  >
                    Driver and passenger <br /> front airbags
                  </label>
                  <p className="font-semibold text-xl"> 0 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          {/* custom ext. */}
          <div className="flex flex-col md:flex-row gap-3 items-center px-2">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Exterior</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-[80%]">
              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={alpineBlueColorBrakeCalipers}
                  alt="Alpine Blue color brake calipers"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Alpine Blue color brake calipers",
                      384,
                      "customE",
                      1
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="alpineBlueColorBrakeCalipers"
                  >
                    Alpine Blue color <br /> brake calipers
                  </label>
                  <p className="font-semibold text-lg">384 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={alpineLogoOnTheFrontFenders}
                  alt="Alpine logo on the front fenders"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Alpine logo on the front fenders",
                      120,
                      "customE",
                      2
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="alpineLogoOnTheFrontFenders"
                  >
                    Alpine logo on the front <br /> fenders
                  </label>
                  <p className="font-semibold text-lg">120 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={brakeCalipersInAnthraciteGrayColor}
                  alt="Brake calipers in Anthracite Gray color"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Brake calipers in Anthracite Gray color",
                      0,
                      "customE",
                      3
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="brakeCalipersInAnthraciteGrayColor"
                  >
                    Brake calipers in Anthracite <br /> Gray color
                  </label>
                  <p className="font-semibold text-lg">0 €</p>
                </div>
              </div>
            </div>
          </div>
          {/* custom int. */}
          <div className="flex flex-col md:flex-row gap-3 items-center px-2">
            <div id="color_title" className="flex justify-center">
              <h1 className="text-4xl font-semibold">Interior</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-[90%]">
              <div className="flex flex-column gap-2 p-1 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={aluminumCrankset}
                  alt="Aluminum crankset"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Aluminum crankset", 120, "customI", 1)
                  }
                />
                <div className="flex flex-col items-center">
                  <label className="text-center" for="aluminumCrankset">
                    Aluminum crankset
                  </label>
                  <p className="font-semibold text-lg"> 120 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={matteCarbonHarmony}
                  alt="Matte carbon harmony"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Matte carbon harmony", 0, "customI", 2)
                  }
                />
                <div className="flex flex-col items-center">
                  <label for="matteCarbonHarmony">Matte carbon harmony</label>
                  <p className="font-semibold text-lg"> 0 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option ">
                <img
                  className="w-[190px]"
                  src={logoInTheCenterOfTheSteeringWheelInAlpineBlue}
                  alt="Logo in the center of the steering wheel in Alpine Blue"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect(
                      "Logo in the center of the steering wheel in Alpine Blue",
                      84,
                      "customI",
                      3
                    )
                  }
                />
                <div className="flex flex-col items-center">
                  <label
                    className="text-center"
                    for="logoInTheCenterOfTheSteeringWheelInAlpineBlue"
                  >
                    Logo in the center of the <br /> steering wheel in Alpine
                    Blue
                  </label>
                  <p className="font-semibold text-lg"> 84 €</p>
                </div>
              </div>

              <div className="flex flex-column p-1 gap-2 shadow-xl items-center card-option">
                <img
                  className="w-[190px]"
                  src={heatedSeats}
                  alt="Heated seats"
                  //heigth={"50px"}
                  // width={"50px"}
                  onClick={() =>
                    haldleSelect("Heated seats", 400, "customI", 4)
                  }
                />
                <div className="flex flex-col items-center">
                  <label for="heatedSeats">Heated seats</label>
                  <p className="font-semibold text-lg">400 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfigCard choiceCar={choiceCar} />
      </div>
    </section>
  );
}

export default Comfort;
