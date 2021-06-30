import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileInfo } from "../../redux/profile/profileActions";
import { createProfile, getProfileData } from "../../services/api";
import { ProfileFormContainer } from "./ProfileStyled";

const initialState = {
  userName: "",
  dayOfBirth: "",
  email: "",
  phone: "",
  additionalInfo: "",
};

class Profile extends Component {
  state = {
    ...initialState,
  };

  componentDidMount() {
    getProfileData().then((res) => this.props.getProfileInfo(res));
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await createProfile(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { userName, dayOfBirth, email, phone, additionalInfo } = this.state;

    return (
      <ProfileFormContainer>
        {this.props.profile ? (
          <div className="profileFormContent">
            <p>
              <span className="userInfo">Name: </span>
              {this.props.profile.userName}
            </p>
            <p>
              <span className="userInfo">Birthday: </span>
              {this.props.profile.dayOfBirth}
            </p>
            <p>
              <span className="userInfo">E-mail: </span>
              {this.props.profile.email}
            </p>
            <p>
              <span className="userInfo">Phone: </span>
              {this.props.profile.phone}
            </p>
            <p>
              <span className="userInfo">Additional info: </span>
              {this.props.profile.additionalInfo}
            </p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="profileFormContent">
              <label className="profileFormLabel">
                <input
                  className="profileInputData"
                  type="text"
                  name="userName"
                  placeholder="USER NAME:"
                  value={userName}
                  onChange={this.handleChange}
                ></input>
              </label>

              <label className="profileFormLabel">
                <input
                  className="profileInputData"
                  type="text"
                  name="dayOfBirth"
                  placeholder="BIRTHDAY:"
                  value={dayOfBirth}
                  onChange={this.handleChange}
                ></input>
              </label>

              <label className="profileFormLabel">
                <input
                  className="profileInputData"
                  type="text"
                  name="email"
                  placeholder="E-MAIL:"
                  value={email}
                  onChange={this.handleChange}
                ></input>
              </label>

              <label className="profileFormLabel">
                <input
                  className="profileInputData"
                  type="text"
                  name="phone"
                  placeholder="PHONE:"
                  value={phone}
                  onChange={this.handleChange}
                ></input>
              </label>

              <label className="profileFormLabel">
                <input
                  className="profileInputData"
                  type="text"
                  name="additionalInfo"
                  placeholder="ADDITIONAL INFO:"
                  value={additionalInfo}
                  onChange={this.handleChange}
                ></input>
              </label>
              <button type="submit" className="submitButton">
                ADD PROFILE
              </button>
            </div>
          </form>
        )}
      </ProfileFormContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfileInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
