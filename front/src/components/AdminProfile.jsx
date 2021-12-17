import React from "react";
import AdminLogin from "./AdminLogin";
import authService from "../services/auth.service";
import AdminDashBoard from "./AdminDashBoard";
import { useHistory, Redirect } from "react-router-dom";

const AdminProfile = () => {
  try {
    if (authService.getCurrentUser().token)
      return <AdminDashBoard adminToken={authService.getCurrentUser().token} />;
  } catch (e) {
    alert("Sirr ! you are not logged in");
    return <Redirect to={"/"} />;
  }
};

export default AdminProfile;
