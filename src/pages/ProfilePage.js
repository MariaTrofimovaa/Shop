import React, { Component } from "react";
import Profile from "../Components/profile/Profile";

class ProfilePage extends Component {
  render() {
    return <Profile submitProfile={this.submitProfile} />;
  }
}

export default ProfilePage;
