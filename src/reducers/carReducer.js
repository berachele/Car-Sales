export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
//simple reducer to grow cases when time comes
  export const carReducer = (state = initialState, action) => {
      console.log("State AND Action-->", state, action)
      switch(action.type){
          case "ADD_FEATURE":
              return{
                  //spread state,
                  ...state,
                  //car/features will take from adtlFeature and add to features✅
                  //car/price will add feature price✅
                  car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload]
                  },//end of car
                  additionalFeatures: state.additionalFeatures.filter(feature=> 
                    feature !== action.payload
                    )
              }//end of ADD_F
            case "REMOVE_FEATURE":
                return{
                    ...state,
                    car: {
                        //car/price will be state.price - action.payload.price
                        //car/features remove the selected item
                        ...state.car,
                        price: state.car.price - action.payload.price,
                        features: [...state.car.features.filter(feature=> 
                            feature !== action.payload
                        )]
                    },//end of car
                    additionalFeatures: [...state.additionalFeatures, action.payload]
                }//end of REMOVE_F
          default:
              return state
      }
  }