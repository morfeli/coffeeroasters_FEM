const locationBox = document.getElementById("locations__container");
const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

let locations = [
  {
    image: "../assets/about/desktop/illustration-uk.svg",
    country: "United Kingdom",
    details: "68 Asfordby Rd Alcaston SY6 1YA +44 1241 918425",
  },
  {
    image: "../assets/about/desktop/illustration-canada.svg",
    country: "Canada",
    details: "1528 Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997",
  },
  {
    image: "../assets/about/desktop/illustration-australia.svg",
    country: "Australia",
    details: "36 Swanston Street Kewell Victoria +61 4 9928 3629",
  },
];

const renderLocations = (arr) => {
  const locations = arr
    .map((location) => {
      return `
              <div class="location__container">
              <img class="location__container--img" src="${location.image}" alt="location"/>
              <h1 class="location__container--title">${location.country}</h1>
              <p class="location__container--description">${location.details}</p>
              </div>
          `;
    })
    .join("");

  locationBox.innerHTML = locations;
};
renderLocations(locations);

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
