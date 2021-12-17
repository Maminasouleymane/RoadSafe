import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const AdminDashBoard = ({ adminToken }) => {
  const [accidentInfo, setAccidentInfo] = useState();

  console.log(" ==>> ", adminToken);

  const getAccidents = async () => {
    await axios
      .get("http://localhost:3004/accidents")
      .then((response) => setAccidentInfo(response.data));
  };
  useEffect(() => {
    getAccidents();
  }, []);
  console.log(accidentInfo);
  return (
    <div>
      <Header title="logout Admin" />
      <h1>This is admin landing Page </h1>
      <Footer />
    </div>
  );
};

export default AdminDashBoard;
