"use strict";

console.log(">> Ready :)");

let users = [];

const getApiData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(function(data) {
      const datos = data.results;

      console.log(datos);

      for (const dato of datos) {
        let user = {
          name: dato.name,
          city: dato.location.city,
          picture: dato.picture.medium,
          username: dato.login.username
        };
        // console.log(user);
        users.push(user);
      }
    });
};
console.log(users);
// printedUsers.push(users);

getApiData();
