import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import AuthService from "../services/auth.service";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import authService from "../services/auth.service";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const { userName, password } = data;
    console.log(userName, password);
    await AuthService.login(userName, password);
    history.push("/admin/profile");
    console.log("=> ", localStorage.getItem("user"));
    console.log("=> ", AuthService.getCurrentUser().token);
    // console.log(data);
    // axios.post("http://localhost:3004/admin/login", data).then((response) => {
    //   console.log(response.data);
    // });
  };

  return (
    <>
      <Header />
      <h2> this is admin login page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("userName")} placeholder="username" />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <input type="submit" />
      </form>
      <Footer />
    </>
  );
};

export default AdminLogin;
