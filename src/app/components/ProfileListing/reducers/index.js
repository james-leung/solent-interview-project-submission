import { SearchFilters } from "../actions/actions";
import { combineReducers } from "redux";

const initialState = {
  searchParam: "",
  profiles: [],
};

function filterProfiles(state = initialState, action) {
  switch (action.type) {
    case SearchFilters.SEARCH_PROFILES:
      return {
        ...state,
        searchParam: action.searchParam,
      };
    case SearchFilters.SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles,
      };
  }
}

// export default filterProfiles;

export default combineReducers({
  filterProfiles,
});
