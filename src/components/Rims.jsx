import React from "react";
import { useDispatch } from "react-redux";
import { changeRims } from "../feactures/alpine/AlpineSlice";
import nameRimStandard from "../asset/configurateur/jantes/selection/jante-standard.jpg";
import nameRimSerac from "../asset/configurateur/jantes/selection/jante-serac.jpg";
import nameRimLegende from "../asset/configurateur/jantes/selection/jante-legende.jpg";
import RimColor from "./RimColor";

function Rims({ choiceCar }) {
  const dispatch = useDispatch();
  const handleChangeRim = (name, price) => {
    dispatch(
      changeRims({
        idCar: choiceCar.id,
        name: name,
        price: price,
      })
    );
  };

  return (
    <>
      <section className="py-12">
        <div id="color_title" className="flex justify-center">
          <h1 className="text-4xl font-semibold">Choose the Rims</h1>
        </div>
        <div className="py-16 flex flex-col gap-16">
          <div className="flex justify-center">
            <div className="flex gap-4">
              <div className="p-2 shadow-xl rounded-sm">
                <img
                  className="w-[180px]"
                  src={nameRimStandard}
                  alt="rims standard"
                  onClick={() => handleChangeRim("standard", 0)}
                />
                <p className="font-medium text-lg">Standard</p>
                <p className="font-bold text-xl"> 0 €</p>
              </div>

              <div className="p-2 shadow-xl rounded-sm">
                <img
                  className="w-[180px]"
                  src={nameRimSerac}
                  alt="rims serac"
                  onClick={() => handleChangeRim("serac", 1000)}
                />
                <p className="font-medium text-lg">Serac</p>
                <p className="font-bold text-xl">1000 €</p>
              </div>

              {choiceCar.id === 2 ? (
                <div className="p-2 shadow-xl rounded-sm">
                  <img
                    className="w-[180px]"
                    src={nameRimLegende}
                    alt="rims legende"
                    onClick={() => handleChangeRim("legend", 0)}
                  />
                  <p className="font-medium text-lg">Legend</p>
                  <p className="font-bold text-xl"> 0€</p>
                </div>
              ) : null}
            </div>
          </div>
          <RimColor choiceCar={choiceCar} />
        </div>
      </section>
    </>
  );
}

export default Rims;
