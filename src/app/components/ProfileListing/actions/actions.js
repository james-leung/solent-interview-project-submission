export const searchProfile = (searchParam) => ({
  type: "SEARCH_PROFILES",
  searchParam,
});

export const setProfiles = (profiles) => ({
  type: "SET_PROFILES",
  profiles
})

export const filterProfiles = (profiles) => ({
  type: "FILTER_PROFILES",
  profiles
})

export const setProfileIndex = (profileIndex) => ({
  type: "SET_PROFILE_INDEX",
  profileIndex
})


export const SearchFilters = {
  SEARCH_PROFILES: "SEARCH_PROFILES",
  SET_PROFILES: "SET_PROFILES",
  FILTER_PROFILES: "FILTER_PROFILES",
  SET_PROFILE_INDEX: "SET_PROFILE_INDEX"
};
