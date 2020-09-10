// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router/immutable";
import profileReducer from "../../../app/components/ProfileListing/reducers";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    profileReducer: profileReducer,
  });

export default rootReducer;

// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// {
//     potato: {
//       // ... potatoes, and other state managed by the potatoReducer ...
//     },
//     tomato: {
//       // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
//     }
//   }
