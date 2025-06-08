import React from "react";
import Notes from "./Notes";
import Newadd from "./Newadd";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Newadd showAlert={showAlert} />
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
