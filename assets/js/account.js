$(function () {
  $("#login-modal").load("/assets/login.html");
});
// show login
function showLogin() {
  document.getElementById("login").style.display = "block";
}

function closeLogin() {
  document.getElementById("login").style.display = "none";
}
