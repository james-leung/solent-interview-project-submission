import { SearchFilters } from "../actions/actions";

const initialState = {
  searchParam: "",
  profiles: [],
  filteredProfiles: [],
};

export default (state = initialState, action) => {
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
    case SearchFilters.FILTER_PROFILES:
      return {
        ...state,
        filteredProfiles: state.profiles.filter((p) => {
          let keyword = state.searchParam.toLowerCase();
          let fullname = `${p.name.first} ${p.name.last}`.toLowerCase();
          return fullname.includes(keyword);
        }),
      };
    default:
      return { ...state };
  }
};
