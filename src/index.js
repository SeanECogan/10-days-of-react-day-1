import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import UserDetails from "./UserDetails";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Sean Cogan",
  location: "Sagamore Hills, OH",
  foodType: "Too much :/",
  age: 27,
  likes: "Coding, gaming, reading, exercising",
  twitterUsername: "seanecogan",
  avatar:
    "https://pbs.twimg.com/profile_images/777549568506523649/dGVwXIAG_400x400.jpg"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <UserDetails
        name={user.name}
        location={user.location}
        foodType={user.foodType}
        age={user.age}
        likes={user.likes}
        twitterUsername={user.twitterUsername}
        avatar={user.avatar}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
