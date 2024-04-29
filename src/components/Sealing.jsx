import React from "react";
import SealingPureStandard from "../asset/configurateur/interieurs/selection/cuir-noir_dinamica.jpg";
import SealingPureBlack from "../asset/configurateur/interieurs/selection/cuir-noir_perfore.jpg";
import SealingLegendStandard from "../asset/configurateur/interieurs/selection/cuir-noir.jpg";
import SealingLegendBrun from "../asset/configurateur/interieurs/selection/cuir-brun.jpg";
import { useDispatch } from "react-redux";
import { changeSealing } from "../feactures/alpine/AlpineSlice";
import DesignSealing from "./DesignSealing";

function Sealing({ choiceCar }) {
  //   console.log(choiceCar.Sealing);
  const dispatch = useDispatch();

  const handleChangeSealing = (name, price) => {
    dispatch(
      changeSealing({
        idCar: choiceCar.id,
        name: name,
        price: price,
      })
    );
  };

  return (
    <>
      <section className="flex flex-col gap-12">
      <div id="color_title" className="flex justify-center text-center">
        <h1 className="text-4xl font-semibold">Choose the Sealing</h1>
      </div>
        <div className="flex justify-center gap-4">
          {choiceCar.id === 1 ? (
            <>
              <div className="w-[220px] flex flex-col gap-3 shadow-2xl rounded-sm p-2">
                <img
                  className=""
                  src={SealingPureStandard}
                  alt="sealing standard"
                  height={"150px"}
                  onClick={() =>
                    handleChangeSealing(
                      "bucket seats in black leatherand dinamica",
                      0
                    )
                  }
                />
                <div>
                <p className="font-medium text-md">Bucket seats in black leatherand dinamica</p>
                <p className="font-bold text-xl">0 €</p>
                </div>
              </div>

              <div className="w-[220px] flex flex-col gap-3 shadow-2xl rounded-sm p-2">
                <img
                  className=""
                  src={SealingPureBlack}
                  alt="sealing black"
                  height={"150px"}
                  onClick={() =>
                    handleChangeSealing(
                      "comfort seats in perforated black leather",
                      800
                    )
                  }
                />
                <div className="w-75">
                <p className="font-medium text-md">Comfort seats in perforated black leather</p>
                <p className="font-bold text-xl">800 €</p>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div>
          {choiceCar.id === 2 ? (
            <>
              <div className="flex justify-center gap-4 ">
                <div className="w-[220px] flex flex-col gap-3 shadow-2xl rounded-sm p-2">
                  <img
                    className=""
                    src={SealingLegendStandard}
                    alt="sealing standard"
                    height={"150px"}
                    onClick={() =>
                      handleChangeSealing("comfort seats in black leather", 0)
                    }
                  />
                  <div>
                  <p className="font-medium text-md">Seats in black leather</p>
                  <p className="font-bold text-xl">0 €</p>
                  </div>
                </div>
                <div className="w-[220px] flex flex-col gap-3 shadow-2xl rounded-sm p-2">
                  <img
                    className="w-[220px] shadow-xl rounded-sm"
                    src={SealingLegendBrun}
                    alt="sealing black"
                    height={"150px"}
                    onClick={() =>
                      handleChangeSealing("comfort seats in brown leather", 800)
                    }
                  />
                  <div>
                  <p className="font-medium text-md">Seats in brown leather</p>
                  <p className="font-bold text-xl">800 €</p>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
      <DesignSealing choiceCar={choiceCar} />
    </>
  );
}

export default Sealing;
