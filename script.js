window.onLoad = () => {
  var webpageTabBtns = document.querySelectorAll("[data-webpage]");
  webpageTabBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
      document.getElementById("frame").src = `pages/${event.target.getAttribute("data-webpage")}.html`;
    });
  });
};
