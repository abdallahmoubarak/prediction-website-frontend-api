window.addEventListener("DOMContentLoaded", () => {
  //   initializing varables
  const btn = document.getElementById("predict-button");

  //   fetching dog images
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (document.getElementById("dogImg").src = data.message));
});
