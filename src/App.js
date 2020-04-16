import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux"
import {buyItem, removeFeature} from "./actions/carActions"

const App = props => {
//cut out state to move to reducer folder

//cut removeFeature and butItem to move to actions folder
  const buyItem = item => {
    props.buyItem(item)
  }

  const removeFeature = item => {
  props.removeFeature(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures remove_feature={removeFeature} car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures add_feature={buyItem} additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, 
    {buyItem, removeFeature}
  )(App);