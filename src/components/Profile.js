import React from "react";

class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=responsitories`;
    let following = `${data.homeUrl}/following`;
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a
            href={data.homeURl}
            target="_blank"
            title={data.name || data.username}
          >
            <img src={data.avatar} alt={data.username} />
          </a>
          <h2>
            <a href={data.homeUrl} title={data.username} target="_blank">
              {data.name || data.username}
            </a>
          </h2>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number Of Followers">
                <i>{data.followers}</i>
                <span>Followers</span>
              </a>
            </li>
            <li>
              <a
                href={repositories}
                target="_blank"
                title="Number Of Repository"
              >
                <i>{data.repos}</i>
                <span>Repository</span>
              </a>
            </li>
            <li>
              <a href={following} target="_blank" title="Number Of Following">
                <i>{data.following}</i>
                <span>Following</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Profile;
