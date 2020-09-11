import React from "react";
import ProfileListingApp from "App/components/ProfileListing/ProfileListingApp";
import HomepageWrapper from "./HomepageWrapper"

class Homepage extends React.Component {
  render() {
    return (
      <HomepageWrapper>
        <ProfileListingApp />
      </HomepageWrapper>
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
