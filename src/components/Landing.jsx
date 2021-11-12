import React, { useState, useEffect } from "react";
import LandingHeader from "./LandingHeader";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <div>
        <button>consulter le map </button>
        <button>declare un accident </button>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
