import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you ADD a feature to your car */}
      <button onClick={()=>props.add_feature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
