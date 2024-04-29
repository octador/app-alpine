import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";

import { changeColor } from "../feactures/alpine/AlpineSlice";
import glacierWhite from "../asset/configurateur/couleurs/selection/blanc.jpg";
import specialBlueAlpine from "../asset/configurateur/couleurs/selection/bleu.jpg";
import BlueAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg";
import WhiteAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac_1.jpg";
import deepBlackMetallic from "../asset/configurateur/couleurs/selection/noir.jpg";
import blackAlpine from "../asset/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg";
import Rims from "./Rims";

function Color() {
  const dispatch = useDispatch();

  const cars = useSelector((store) => store.config.car);

  let urlcurrent = document.location.href;
  let url = urlcurrent.substring(urlcurrent.lastIndexOf("/") + 1);

  const choiceCar = cars.find((car) => car.id === parseInt(url));

  // function dispatch qui va venir changer le state
  const handleChangeColor = (name, price, slug, picture) => {
    dispatch(
      changeColor({
        idCar: choiceCar.id,
        name: name,
        picture: picture,
        price: price,
        slug: slug,
      })
    );
  };

  // en venant de la page precedente, ca teleportait au bas de la page et non du debut, donc j'utilise ce code pour que ca envoie au debut de la page et non tout en bas. 
  const [scrollToTop, setScrollToTop] = useState(true);

  useEffect(() => {
    // Simulate navigation from another link (replace with actual logic)
    if (window.location.pathname !== '/current-page') {
      setScrollToTop(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
      setScrollToTop(false); // Reset after scrolling
    }
  }, [scrollToTop]);
// fin du code scroll.

  return (
    <section className="py-16 md:px-12">
      <div id="color_title" className="flex justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Choose the Color</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
        <div className="md:w-1/2 w-full">
          <img
            className=""
            src={choiceCar.color.picture}
            alt={choiceCar.name}
          />
        </div>

        <div className="w-full flex flex-row md:flex-col flex-wrap gap-2 items-start justify-center cursor-pointer">
          <div id="white">
            <div className="shadow-lg w-[90px] md:w-[130px]">
              <img
                className=""
                src={glacierWhite}
                alt="Glacier White Opaque Paint"
                id="1"
                onClick={() =>
                  handleChangeColor(
                    "Glacier White Opaque Paint ",
                    0,
                    "white",
                    WhiteAlpine
                  )
                }
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Glacier White <br/>Opaque</p>
              <p className="font-semibold">0 €</p>
            </div>
          </div>

          <div id="black" >
            <div className="shadow-lg w-[90px] md:w-[130px]">
              <img
                className=""
                src={deepBlackMetallic}
                alt="Deep Black Metallic"
                id="3"
                onClick={() =>
                  handleChangeColor(
                    "Deep Black Metallic",
                    840,
                    "black",
                    blackAlpine
                  )
                }
              />
            </div>
            <div>
              <p className="text-sm">Deep Black <br/> Metallic</p>
              <p className="font-semibold">840 €</p>
            </div>
          </div>

          <div id="blue">
            <div className="shadow-lg w-[90px] md:w-[130px]">
              <img
                className=""
                src={specialBlueAlpine}
                alt="Special Blue AlpinePaint "
                id="2"
                onClick={() =>
                  handleChangeColor(
                    "Special Blue AlpinePaint ",
                    1800,
                    "blue",
                    BlueAlpine
                  )
                }
              />
              <div></div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Special Blue <br/> Alpine</p>
              <p className="font-semibold">1800 €</p>
            </div>
          </div>
        </div>
      </div>

      <Rims choiceCar={choiceCar} />
    </section>
  );
}

export default Color;
