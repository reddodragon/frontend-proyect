import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {

  const [auth, setAuth] = useState();
  const [user, setUser] = useState(false);


  const registerUser = (email, name, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      name,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8086/user", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const loginUser = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8086/login", requestOptions)
      .then((response) => response.json())
      .then((result) => { if(result) 
        {
          setAuth(result)
          console.log(auth)}})
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    localStorage.removeItem('token-info');
    setUser(null);
  };

  const createCard = (title, description, image) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmVkZXJlcGlvbGEiLCJpZCI6IjY0OTg5ZjU2LThiZTUtNDZhYS04ZTg4LWU5YjdlMzRjNWFjNCIsImV4cCI6MTY2MzY0OTg4NH0.9J8KMCxqMs-54AglWppD2FSmIqkGSQ1iDBcri_IZJH8");
    myHeaders.append("Content-Type", "application/json"); 

    var raw = JSON.stringify({
      title,
      description,
      image,
    });
    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.1.196:8086/card", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logout,createCard }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
