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
          name: dato.name.first,
          city: dato.location.city,
          picture: dato.picture.medium,
          username: dato.login.username
        };
        // console.log(user);
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

  htmlCode += `<li class="name">${user.name.first}</li>`;
  htmlCode += `<li class="city">${user.city}</li>`;
  htmlCode += `<li class="image"><img src="${user.picture}" alt="${user.name.first}"></li>`;
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
  // console.log(userToClick);
  for (const user of userToClick) {
    // console.log(user);
    user.addEventListener("click", handleUserToClick);
  }
}

const handleUserToClick = ev => {
  //obtener el id del user clickado
  const clickedUser = parseInt(ev.target.id);
  console.log(clickedUser);
  //buscar el user clickado
  // console.log(users[clickedUser]);
  let encontrado = users[clickedUser];

  if (encontrado.isFriend === true) {
    encontrado.isFriend = false;
  } else {
    encontrado.isFriend = true;
  }

  paintUsers();
};

getApiData();
// tengo que consolear el index del elemento clicado (en el console.log de la línea 63) y luego lo de añadirle isFriend:true

// user.isFriend = true;
// // Object.defineProperty(user, "isFriend", { value: true });

// a partir de la 64:

// function handleUserToClick(ev) {
//   // console.log(user);
//   const clickedUser = ev.target.id;
//   const encontrar = users.findIndex(function findClickedUser(user) {
//     // console.log();
//     return user.id === clickedUser;
//   });
//   console.log(clickedUser);

//   // console.log(ev.target.id);
//   for (const user of users) {
//     if (clickedUser !== null) {
//       user.isFriend = true;
//     }

//     console.log(user);
//   }
// }
