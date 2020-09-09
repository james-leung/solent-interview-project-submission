let nextTodoId = 0;
// export const addTodo = (text) => ({
//   type: "ADD_TODO",
//   id: nextTodoId++,
//   text,
// });

// export const setVisibilityFilter = (filter) => ({
//   type: "SET_VISIBILITY_FILTER",
//   filter,
// });

// export const toggleTodo = (id) => ({
//   type: "TOGGLE_TODO",
//   id,
// });

export const searchProfile = (searchParam) => ({
  type: "SEARCH_PROFILES",
  searchParam,
});

export const SearchFilters = {
  SEARCH_PROFILES: "SEARCH_PROFILES",
};
