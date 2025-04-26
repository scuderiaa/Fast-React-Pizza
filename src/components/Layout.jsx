import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const updateUserName = (name) => {
    if (name === "") {
      localStorage.removeItem("userName");
    } else {
      localStorage.setItem("userName", name);
    }
    setUserName(name);
  };

  return (
    <>
      <Header userName={userName} />
      <Outlet context={{ userName, setUserName: updateUserName }} />
    </>
  );
};

export default Layout;
