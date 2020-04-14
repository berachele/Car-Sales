import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//import {connect} from ""
import {createStore} from "redux"



//Step 1 Create store using createStore, pass in reducer function
const store = createStore();

const App = () => {
  
  //functions to build out functionality (return action object)-->type: 'FROM-REDUCER'
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} /> {/* Will eventually change out state.car to props.car */}
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
//create mapStateToProps here

export default App; //replace App with connect and two parameters
