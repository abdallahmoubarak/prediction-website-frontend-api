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

    // fetching activity
    axios.get("http://www.boredapi.com/api/activity").then((res) => {
      document.getElementById("activity").innerHTML = res.data.activity;
    });
  });

  // fetching location
  axios
    .get("https://api.ipify.org/?format=json")
    .then((res) => (document.getElementById("ip").innerHTML = res.data.ip));

  // signUp
  document.getElementById("sign-body").style.display = "block";

  // switch login

  document.getElementById("switch-login").addEventListener("click", () => {
    document.getElementById("login-body").style.display = "block";
    document.getElementById("sign-body").style.display = "none";
  });

  // switch login

  document.getElementById("switch-sign").addEventListener("click", () => {
    document.getElementById("login-body").style.display = "none";
    document.getElementById("sign-body").style.display = "block";
  });

  // sign up process
  document.getElementById("sign-btn").addEventListener("click", () => {
    var email = document.getElementById("sign-mail").value;
    var password = document.getElementById("sign-password").value;

    localStorage.setItem(email, password);

    document.getElementById("sign-body").style.display = "none";
    document.getElementById("default-body").style.display = "block";
  });

  // login process

  document.getElementById("login-btn").addEventListener("click", () => {
    var email = document.getElementById("log-mail").value;
    var password = document.getElementById("log-password").value;

    if (localStorage.getItem(email) == password) {
      document.getElementById("login-body").style.display = "none";
      document.getElementById("sign-body").style.display = "none";
      document.getElementById("default-body").style.display = "block";
    } else {
      document.getElementById("msg").innerHTML = "You need to sign up first";
    }
  });
});
