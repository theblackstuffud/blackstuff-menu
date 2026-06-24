const logo = document.getElementById("pubLogo");

const logoSources = [
  "Logo.png?v=5",
  "logo.png?v=5",
  "logo.PNG?v=5",
  "logo.jpg?v=5",
  "logo.jpeg?v=5"
];

let logoIndex = 0;

logo.addEventListener("error", () => {
  logoIndex += 1;
  if (logoIndex < logoSources.length) {
    logo.src = logoSources[logoIndex];
  } else {
    logo.style.display = "none";
  }
});
