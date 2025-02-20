import React, { useReducer } from "react";
import { Type } from "./action.type";

//1/const [state, dispatcher] = useReducer(reducer, initialState);// import and initalize useReducer and next

//2/defininig the initial state
export const initialState = {
  basket: [],
};

//3/ dfining the reduce frunction
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };

    default:
      return state;
  }
};
