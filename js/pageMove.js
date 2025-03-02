
const homePage = document.getElementById("home-page");
const deskPage = document.getElementById("desk-page");

if (homePage) {
  homePage.addEventListener("click", function () {
    window.location.href = "./home.html";
    alert("Goto Home page successfully");
  });
}

if (deskPage) {
  deskPage.addEventListener("click", function () {
    window.history.back();
    alert("Return again Desk page");
  });
}
