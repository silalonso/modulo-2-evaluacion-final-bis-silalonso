"use strict";

console.log(">> Ready :)");

let users = [];

const getApiData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
      for (const user of data) {
        name : name,
        city : location.city,
        photo : picture.medium,
        username : login.username
      }
      console.log(data);
    });
};

getApiData();
