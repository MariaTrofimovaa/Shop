import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileInfo } from "../../redux/profile/profileActions";
import { createProfile, getProfileData } from "../../services/api";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    tag: "",
    phone: "",
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
    this.reset();
  };

  reset = () => {
    this.setState({ firstName: "", lastName: "", tag: "", phone: "" });
  };

  render() {
    return (
      <div className="formContainer">
        {this.props.profile ? (
          <p>{this.props.profile.firstName}</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                className="inputData"
                type="text"
                name="firstName"
                placeholder="Name:"
                value={this.state.firstName}
                onChange={this.handleChange}
              ></input>
            </label>

            <label>
              <input
                className="inputData"
                type="text"
                name="lastName"
                placeholder="Last Name:"
                value={this.state.lastName}
                onChange={this.handleChange}
              ></input>
            </label>

            <label>
              <input
                className="inputData"
                type="text"
                name="tag"
                placeholder="Tag:"
                value={this.state.tag}
                onChange={this.handleChange}
              ></input>
            </label>

            <label>
              <input
                className="inputData"
                type="text"
                name="phone"
                placeholder="Phone:"
                value={this.state.phone}
                onChange={this.handleChange}
              ></input>
            </label>
            <button type="submit" className="signInBtn">
              Sign in
            </button>
          </form>
        )}
      </div>
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
