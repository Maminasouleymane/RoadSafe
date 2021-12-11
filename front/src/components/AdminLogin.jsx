import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3004/admin/login", data).then((response) => {
      console.log(response.data);
    });
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
