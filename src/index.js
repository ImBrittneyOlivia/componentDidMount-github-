import React from "react";
import { render } from "react-dom";
import Profile from "./components/Profile";
import "./index.css";

const API = "https://api.github.com/users";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "ImBrittneyOlivia",
      name: "",
      avatar: "",
      location: "",
      repos: "",
      folloers: "",
      following: "",
      homeUrl: "",
      notFound: ""
    };
  }

  // etwo asynchronous processes
  // first then in response to the fetch call has a param response which is the data that was returned from the query.
  // then converted to JSON() which returns the next promise. The json param in the last then statements is the converted data that is passed to the console.log() function
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        });
      })
      .catch(error => console.log("Oops! There Is A Problem")); // this only runs if the Promise rejected at some earlier point
  }

  componentDidMount() {
    this.fetchProfile(this.state.username);
  }

  render() {
    return (
      <div>
        <section id="id">
          <Profile data={this.state} />
        </section>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
