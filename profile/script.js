const userName = document.getElementById("fName");
const userEmail = document.getElementById("email");
const userToken = document.getElementById("token");
const userPassword = document.getElementById("password");
const logoutBtn = document.getElementById("logout-btn");

// ensuring users cannot manually navigate to the "Profile" page unless they are logged in
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    // alert("unauthorized access! redirect to login page."); //add toster
    window.location.href = "../index.html";
  }
});

const contentLoad = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const currUser = user[user.length - 1];

  userName.innerText = `Full Name: ${currUser.name}`;
  userEmail.innerText = `Email: ${currUser.email}`;
  userToken.innerText = `Token: ${currUser.token}`;
  userPassword.innerText = `Password: ${currUser.password}`;

  console.log(currUser);
};

const logoutBtnHandler = () => {
  localStorage.removeItem("users");
  localStorage.setItem("isLoggedIn", false);
  window.location.href = "../index.html";
};

contentLoad();

logoutBtn.addEventListener("click", logoutBtnHandler);
