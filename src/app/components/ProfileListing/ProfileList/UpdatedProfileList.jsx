import { connect } from "react-redux";
import ProfileList from "./ProfileList";
import { setProfileIndex } from "../actions/actions";

const mapStateToProps = (state) => ({
  filteredProfiles: state.profileReducer.filteredProfiles,
});

const mapDispatchToProps = (dispatch) => ({
  setProfileIndex: (profileIndex) => {
    return dispatch(setProfileIndex(profileIndex));
  },
});

// Wrap profile list
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
