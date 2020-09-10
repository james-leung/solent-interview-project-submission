export const searchProfile = (searchParam) => ({
  type: "SEARCH_PROFILES",
  searchParam,
});

export const setProfiles = (profiles) => ({
  type: "SET_PROFILES",
  profiles
})

export const SearchFilters = {
  SEARCH_PROFILES: "SEARCH_PROFILES",
  SET_PROFILES: "SET_PROFILES"
};
