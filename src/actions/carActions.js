export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("buyItem Function is working!!!!!")
    return { type: "ADD_FEATURE", payload: item }
    };

export const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("removeFeature is WORKING $$$$")
    return { type: "REMOVE_FEATURE", payload: item }
  };