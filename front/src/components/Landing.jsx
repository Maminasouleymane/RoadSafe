import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <button>
          <Link to={"/mapstate"}> consulter le map</Link>{" "}
        </button>
        <button>
          {" "}
          <Link to={"/declare"}> Declarer un accident</Link>{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
