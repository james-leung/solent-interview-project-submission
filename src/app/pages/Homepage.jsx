import React from "react";
import ProfileListingApp from "App/components/ProfileListing/ProfileListingApp";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <ProfileListingApp />
      </>
    );
  }
}

// OR

const HomepageUsingHooks = () => {
  return (
    <>
      <ProfileListingApp />
    </>
  );
};

export default Homepage;

export { Homepage, HomepageUsingHooks };
