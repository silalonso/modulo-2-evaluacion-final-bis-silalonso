"use strict";

let users = [];

const getApiData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(function(data) {
      const datos = data.results;
      for (const dato of datos) {
        let user = {
          name: dato.name.first,
          city: dato.location.city,
          picture: dato.picture.medium,
          username: dato.login.username
        };
        users.push(user);
      }
      paintUsers();
    });
};
console.log(users);

const usersElement = document.querySelector(".js-users");

const getUsersHtmlCode = (user, index) => {
  console.log(user.isFriend);
  let htmlCode = "";
  htmlCode += `<section class="userSpace" >`;

  if (user.isFriend === true) {
    htmlCode += `<ul class="profile isFriend" id="${index}">`;
  } else {
    htmlCode += `<ul class="profile" id="${index}">`;
  }

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
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    usersCode += getUsersHtmlCode(user, index);
  }

  usersElement.innerHTML = usersCode;
  listenUsers();
};
function listenUsers() {
  const userToClick = document.querySelectorAll(".profile");
  for (const user of userToClick) {
    user.addEventListener("click", handleUserToClick);
  }
}

const handleUserToClick = ev => {
  const clickedUser = parseInt(ev.target.id);

  let foundUser = users[clickedUser];

  if (foundUser.isFriend === true) {
    foundUser.isFriend = false;
  } else {
    foundUser.isFriend = true;
  }
  paintUsers();
};

const setInLocalStorage = () => {
  const stringifyUsers = JSON.stringify(users);
  localStorage.setItem("users", stringifyUsers);
};

const setInLocalStorageButton = document.querySelector(".js-saveData");

const handleSetInLocalStorageButton = setInLocalStorage();

setInLocalStorageButton.addEventListener(
  "click",
  handleSetInLocalStorageButton
);

getApiData();
