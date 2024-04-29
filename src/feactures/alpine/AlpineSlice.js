import { createSlice, current } from '@reduxjs/toolkit';
import A110PURE from '../../asset/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac_1.jpg'
import A110LEGENDE from '../../asset/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg'
import PureModel from '../../asset/sources-homepage/versions/ALPINE-PURE-1.png';
import LegendeModel from '../../asset/sources-homepage/versions/ALPINE-LEGENDE-1.png';


const initialState = {
  step: {
    stepversion: false,
    stepcolor: false,
    steprims: false,
    stepinterior: false
  },
  car: [
    {
      id: 1,
      version: 'A110-PURE',
      picture: A110PURE,
      pictureSelect: PureModel,
      price: 54700,
      state100: 4.5,
      vMax: 250,
      hp: 252,
      color: {
        name: "Glacier white opaque paint",
        picture: A110PURE,
        price: 0,
        slug: 'white'
      },
      rims: {
        name: 'standard',
        color: 'white',
        price: 0
      },
      Sealing: {
        name: 'bucket seats in black leatherand dinamica',
        price: 0
      },
      mediaAndNavigation: {
        name: 'standard audio system',
        price: 0
      },
      equipment: {
        design: [],
        comfort: [],
        conduct: [],
        security: [],
        exteriorCustomization: [],
        interiorCustomization: []
      }
    },
    {
      id: 2,
      version: 'A110-LEGENDE',
      picture: A110LEGENDE,
      pictureSelect: LegendeModel ,
      price: 58500,
      state100: 4.2,
      vMax: 250,
      hp: 300,
      color: {
        name: "Glacier white opaque paint",
        picture: A110LEGENDE,
        price: 0,
        slug: 'white'
      },
      rims: {
        name: 'standard',
        color: 'white',
        price: 0
      },
      Sealing: {
        name: 'comfort seats in black leather',
        price: 0
      },
      mediaAndNavigation: {
        name: 'standard audio system',
        price: 0
      },
      equipment: {
        design: [],
        comfort: [],
        conduct: [],
        security: [],
        exteriorCustomization: [],
        interiorCustomization: []
      }
    }
  ],

};

export const alpineSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    // option: (state) => {
    //   state.car
    // },
    changeColor: (state, action) => {

      const currentCar = state.car.find((car) => car.id === action.payload.idCar);

      currentCar.color.name = action.payload.name;
      currentCar.color.slug = action.payload.slug;
      // currentCar.rims.color = action.payload.slug;
      currentCar.color.price = action.payload.price;
      currentCar.color.picture = action.payload.picture
    },
    changeRims: (state, action) => {
      const currentCar = state.car.find((car) => car.id === action.payload.idCar);
      currentCar.rims.name = action.payload.name
      currentCar.rims.price = action.payload.price
    },
    rimColor: (state, action) => {
      // const currentCar = state.car.find((car) => car.id === action.payload.idCar);

    },
    changeSealing: (state, action) => {

      const currentCar = state.car.find((car) => car.id === action.payload.idCar);
      currentCar.Sealing.name = action.payload.name
      currentCar.Sealing.price = action.payload.price
    },
    changeMedia: (state, action) => {
      const currentCar = state.car.find((car) => car.id === action.payload.idCar);
      currentCar.mediaAndNavigation.name = action.payload.name
      currentCar.mediaAndNavigation.price = action.payload.price

      console.log(currentCar.mediaAndNavigation.price);
    },
    selectOption: (state, action) => {

      const currentCar = state.car.find((car) => car.id === action.payload.idCar);


      if (action.payload.type === 'design') {
        // verifier si il existe
        const existingDesign = currentCar.equipment.design.findIndex(design => design.name === action.payload.name);
        console.log(existingDesign);
        // si il existe pas je push dans design
        if (existingDesign === -1) {
          console.log('existe pas');
          currentCar.equipment.design.push(action.payload)
        }
        // si il existe je filtre uniquement celui qui est rentrer et je remplace le tableau par le tableau du filtre
        if (existingDesign === 0) {
          console.log('existe');
          const deleteDesign = currentCar.equipment.design.filter((design) => design.name !== action.payload.name)
          console.log(deleteDesign);
          currentCar.equipment.design = deleteDesign
        }
        // console.log('design', current(currentCar.equipment.design));
        console.log('action', action.payload.id);

        // console.log(current(currentCar.equipment.design));
      }

      if (action.payload.type === 'comfort') {

        const existComfort = currentCar.equipment.comfort.findIndex((comfort) => comfort.id === action.payload.id)
        console.log(existComfort);
        
        if (existComfort === -1) {

          currentCar.equipment.comfort.push(action.payload)
        }


        if (existComfort >= 0) {

          const deleteComfort = currentCar.equipment.comfort.filter((comfort) => comfort.id !== action.payload.id)

          currentCar.equipment.comfort = deleteComfort

          console.log('delete');
        }

      }

      if (action.payload.type === 'conduct') {
        const existConductIndex = currentCar.equipment.conduct.findIndex((conduct) => conduct.id === action.payload.id);

        if (existConductIndex === -1) {
          // Si l'objet de type "conduct" avec l'id correspondant n'existe pas
          if (action.payload.id === 1) {
            // Si l'id est 1, on supprime l'objet de type "conduct" avec l'id 3 s'il existe
            const filteredConduct = currentCar.equipment.conduct.filter((conduct) => conduct.id !== 3);
            filteredConduct.push(action.payload);
            currentCar.equipment.conduct = filteredConduct;

          } else if (action.payload.id === 3) {
            // Si l'id est 3, on supprime l'objet de type "conduct" avec l'id 1 s'il existe
            const filteredConduct = currentCar.equipment.conduct.filter((conduct) => conduct.id !== 1);
            filteredConduct.push(action.payload);
            currentCar.equipment.conduct = filteredConduct;
          } else {
            // Sinon, on ajoute simplement l'objet de type "conduct"
            currentCar.equipment.conduct.push(action.payload);
          }
        } else {
          // Si l'objet de type "conduct" avec l'id correspondant existe déjà, on le supprime
          const filteredConduct = currentCar.equipment.conduct.filter((conduct) => conduct.id !== action.payload.id);
          currentCar.equipment.conduct = filteredConduct;
        }
      }

      if (action.payload.type === 'security') {

        console.log(action.payload);

        const exitSecurity = currentCar.equipment.security.findIndex((security) => security.id === action.payload.id)

        if (exitSecurity === -1)

          console.log('existe pas');

        currentCar.equipment.security.push(action.payload)

        if (exitSecurity >= 0) {

          console.log('existe');

          const deleteSecurity = currentCar.equipment.security.filter((security) => security.id !== action.payload.id);
          currentCar.equipment.security = deleteSecurity;

        }
      }

      if (action.payload.type === 'customE') {

        const existCustomE = currentCar.equipment.exteriorCustomization.findIndex((exteriorCustomization) => exteriorCustomization.id === action.payload.id)

        if (existCustomE === -1 && action.payload.id === 1) {

          const filtercustomE = currentCar.equipment.exteriorCustomization.filter((exteriorCustomization) => exteriorCustomization.id !== 3)
          filtercustomE.push(action.payload);
          currentCar.equipment.exteriorCustomization = filtercustomE;
        }
        if (existCustomE === -1 && action.payload.id === 3) {

          const filtercustomE = currentCar.equipment.exteriorCustomization.filter((exteriorCustomization) => exteriorCustomization.id !== 1)
          filtercustomE.push(action.payload);
          currentCar.equipment.exteriorCustomization = filtercustomE;
        }
        if (existCustomE === -1 && action.payload.id === 2) {


          currentCar.equipment.exteriorCustomization.push(action.payload)
        }

        if (existCustomE >= 0) {

          const filtercustomE = currentCar.equipment.exteriorCustomization.filter((existCustomE) => existCustomE.id !== action.payload.id);
          currentCar.equipment.exteriorCustomization = filtercustomE;
        }
      }
      if (action.payload.type === 'customI') {
        const existCustomI = currentCar.equipment.interiorCustomization.findIndex((interiorCustomization) => interiorCustomization.id === action.payload.id)

        if (existCustomI === -1) {
          currentCar.equipment.interiorCustomization.push(action.payload)
        }
        if (existCustomI >= 0) {
          const filterCustomI = currentCar.equipment.interiorCustomization.filter((interiorCustomization) => interiorCustomization.id !== action.payload.id)
          currentCar.equipment.interiorCustomization = filterCustomI
        }

      }
      console.log(current(currentCar.equipment))
      // console.log(current(currentCar.equipment))
    }

  }
}
);

export const { alpine, selectCar, changeColor, changeRims, rimColor, changeSealing, changeMedia, selectOption } = alpineSlice.actions

export default alpineSlice.reducer;
