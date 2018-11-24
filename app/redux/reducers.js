import * as actions from "./actions";
import { initialState } from "./initialState";

export default function goblalReducer(state, action) {
  switch (action.type) {
    case actions.CLEAR_DATA:
      return initialState;
    case actions.SET_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
}
