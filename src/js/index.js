window.addEventListener("DOMContentLoaded", () => {
  //   initializing varables
  const btn = document.getElementById("predict-button");
  //   fetching dog images
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (document.getElementById("dogImg").src = data.message));
  btn.addEventListener("click", () => {
    var name = document.getElementById("card-input").value;
    // fetching age for the input name
    fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => (document.getElementById("age").innerHTML = data.age));

    // fetching gender for the input name
    fetch(`https://api.genderize.io/?name=${name}`)
      .then((response) => response.json())
      .then(
        (data) => (document.getElementById("gender").innerHTML = data.gender)
      );

    // fetching nationality for the input name

    var nationalities = "";
    fetch(`https://api.nationalize.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) =>
        data.country.forEach((nationality) => {
          nationalities = nationalities + nationality.country_id + " ";
        })
      )
      .then(() => {
        document.getElementById("nationality").innerHTML = nationalities;
      });
  });
});
