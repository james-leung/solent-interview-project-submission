import { connect } from "react-redux";
import ProfileList from "./ProfileList";

const mapStateToProps = (state) => ({
  filteredProfiles: state.profileReducer.filteredProfiles,
});

// Wrap profile list
export default connect(mapStateToProps)(ProfileList);
