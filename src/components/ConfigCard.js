import React from "react";

function ConfigCard({ choiceCar }) {
  let priceTotal = [];

  console.log(priceTotal);

  priceTotal.push(choiceCar.price);
  priceTotal.push(choiceCar.rims.price);
  priceTotal.push(choiceCar.color.price);
  priceTotal.push(choiceCar.Sealing.price);
  priceTotal.push(choiceCar.mediaAndNavigation.price);

  choiceCar.equipment.design.forEach((design) => {
    priceTotal.push(design.price);
  });
  choiceCar.equipment.comfort.forEach((comfort) => {
    priceTotal.push(comfort.price);
  });
  choiceCar.equipment.conduct.forEach((conduct) => {
    priceTotal.push(conduct.price);
  });
  choiceCar.equipment.security.forEach((security) => {
    priceTotal.push(security.price);
  });
  choiceCar.equipment.exteriorCustomization.forEach((exteriorCustomization) => {
    priceTotal.push(exteriorCustomization.price);
  });
  choiceCar.equipment.interiorCustomization.forEach((interiorCustomization) => {
    priceTotal.push(interiorCustomization.price);
  });

  const totalPrice = priceTotal.reduce((acc, curr) => acc + curr, 0);
  console.log(totalPrice);

  return choiceCar ? (
    <div className="dropup-center dropup fixed-bottom mt-5">
      <button
        className="btn btn-secondary dropdown-toggle p-2 text-lg"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {"Total price " + totalPrice + " Euros "}
      </button>
      <ul className="dropdown-menu">
        <li className="py-3 px-2">Version : {choiceCar.version}</li>
        <hr />
        <li className="py-3 px-2">
          Color : {choiceCar.color.name} price: {choiceCar.color.price} €
        </li>
        <hr />
        <li className="py-3 px-2">
          Rims : {choiceCar.rims.name} price: {choiceCar.rims.price} €
        </li>
        <hr />
        <li className="py-3 px-2">
          Sealing : {choiceCar.Sealing.name} price: {choiceCar.Sealing.price} €
        </li>
        <hr />
        <li className="py-3 px-2">Design : </li>
        {choiceCar.equipment.design.map((design) => (
          <li key={design.name}>
            {" "}
            - {design.name} price : {design.price} €{" "}
          </li>
        ))}
        <hr />
        <li className="py-3 px-2">Comfort : </li>
        {choiceCar.equipment.comfort.map((comfort) => (
          <li key={comfort.name}>
            {" "}
            - {comfort.name} price : {comfort.price} €{" "}
          </li>
        ))}
        <hr />
        <li className="py-3 px-2">Conduct : </li>
        {choiceCar.equipment.conduct.map((conduct) => (
          <li key={conduct.name}>
            {" "}
            - {conduct.name} price : {conduct.price} €{" "}
          </li>
        ))}
        <hr />
        <li className="py-3 px-2">Security : </li>
        {choiceCar.equipment.security.map((security) => (
          <li key={security.name}>
            {" "}
            - {security.name} price : {security.price} €{" "}
          </li>
        ))}
        <hr />
        <li className="py-3 px-2">Exterior Customization : </li>
        {choiceCar.equipment.exteriorCustomization.map((exteriorCustomization) => (
          <li key={exteriorCustomization.name}>
            {" "}
            - {exteriorCustomization.name} price : {exteriorCustomization.price} €{" "}
          </li>
        ))}
        <hr />
        <li className="py-3 px-2">Interior Customization: </li>
        {choiceCar.equipment.interiorCustomization.map((interiorCustomization) => (
          <li key={interiorCustomization.name}>
            {" "}
            - {interiorCustomization.name} price : {interiorCustomization.price} €{" "}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default ConfigCard;
