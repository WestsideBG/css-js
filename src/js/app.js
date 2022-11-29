import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

let addArticle = () => {
  const articleTag = document.createElement("article");
  articleTag.classList.add("message");
  articleTag.innerHTML = "LOREM IPUSUM";
  document.body.appendChild(articleTag);
}

document.body.addEventListener("click", (event) => {
    for (let i = 0; i < 5; i++) {
      addArticle();
    }
    event.preventDefault();
})