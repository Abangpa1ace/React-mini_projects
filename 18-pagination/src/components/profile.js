import React from 'react';

const Profile = ({ profile }) => {
  const { id, login, avatar_url, html_url } = profile;
  return (
    <article className="profile" key={id}>
      <img alt="profile-img" src={avatar_url} />
      <p>{login}</p>
      <button><a href={html_url}>View Profile</a></button>
    </article>
  )
}

export default Profile;