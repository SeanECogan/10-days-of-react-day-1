import React from "react";

function UserDetails(props) {
  const url = `https://twitter.com/@${props.twitterUsername}`;

  return (
    <div className="user-deets">
      <img src={props.avatar} alt={props.name} />

      <h3>
        <a href={url}>{props.name}</a>
      </h3>

      <p>
        <strong>Location</strong>
        {props.location}
      </p>

      <p>
        <strong>Eats</strong>
        {props.foodType}
      </p>

      <p>
        <strong>Age</strong>
        {props.age}
      </p>

      <p>
        <strong>Likes</strong>
        {props.likes}
      </p>

      <p>
        <strong>Twitter</strong>
        <a href={url}>@{props.twitterUsername}</a>
      </p>
    </div>
  );
}

export default UserDetails;
