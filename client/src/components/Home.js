import React from "react";
import "./home.css"
import img from "./images/bg1.jpg"
import "./Style.css"
import Navb from './Navbar'

const Home = () => {
  
  return (
    <>

      <div className="container">
        <div className="row">
          <Navb />
        </div>
        <div className="mainhome row">
          <img style={{img}} height="auto" ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
