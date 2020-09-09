import { connect } from "react-redux";
import { SearchFilters } from "../actions/actions";
import ProfileList from "./ProfileList";
import { searchProfile } from "../actions/actions";

// Reducer?
const getProfiles = (profiles, filter, searchParam) => {
  switch (filter) {
    case SearchFilters.SEARCH_PROFILES:
      return profiles.filter(
        (p) =>
          p.name.first.includes(searchParam) ||
          p.name.last.includes(searchParam) ||
          p.email.includes(searchParam)
      );
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  allProfiles: state.allProfiles,
  profiles: getProfiles(
    state.allProfiles,
    SearchFilters.SEARCH_PROFILES,
    searchParam
  ),
});

const mapDispatchToProps = (dispatch) => ({
  // toggleTodo: id => dispatch(toggleTodo(id))
  searchProfile: (searchParam) => dispatch(searchProfile(searchParam)),
});

// Wrap profile list
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
