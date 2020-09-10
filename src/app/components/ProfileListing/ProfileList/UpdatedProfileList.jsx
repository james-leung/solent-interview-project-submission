import { connect } from "react-redux";
import ProfileList from "./ProfileList";

const mapStateToProps = (state, ownProps) => ({
  filteredProfiles: ownProps.profiles.filter((p) => p.name.first.includes("a")),
  profiles: state.profiles,
});

// Wrap profile list
export default connect(mapStateToProps)(ProfileList);
