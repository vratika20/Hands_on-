import React from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true;

  if (flag === true) {
    return (
      <div>
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div>
        <IndianPlayers />
      </div>
    );
  }
}

export default App;