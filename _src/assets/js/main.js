"use strict";

console.log(">> Ready :)");

let users = [];

const getApiData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(function(data) {
      const datos = data.results;

      // console.log(datos);

      for (const dato of datos) {
        let user = {
          name: dato.name,
          city: dato.location.city,
          picture: dato.picture.medium,
          username: dato.login.username
        };
        // console.log(user);
        users.push(user);
        paintUsers();
      }
    });
};
console.log(users);
// printedUsers.push(users);

const usersElement = document.querySelector(".js-users");

const getUsersHtmlCode = user => {
  let htmlCode = "";
  htmlCode += `<section class="userSpace">`;
  htmlCode += `<ul class="profile">`;
  htmlCode += `<li class="name">${user.name}</li>`;
  htmlCode += `<li class="city">${user.city}</li>`;
  htmlCode += `<li class="image"><img src="${user.picture}" alt="${user.name}"></li>`;
  htmlCode += `<li class= "username">${user.username}</li>`;
  htmlCode += `</ul>`;
  htmlCode += `</section>`;
  return htmlCode;
};

const paintUsers = () => {
  let usersCode = "";
  for (const user of users) {
    usersCode += getUsersHtmlCode(user);
  }
  usersElement.innerHTML = usersCode;
};

const userToClick = document.querySelector(".profile");

userToClick.addEventListener("click", function() {
  console.log("ahora somos friends");
});

getApiData();
