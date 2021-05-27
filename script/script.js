const productBox = document.getElementById("products__container");
const benefitsBox = document.getElementById("benefits__container");
const stepsBox = document.getElementById("steps__container");
const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

let products = [
  {
    image: "../assets/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    image: "../assets/home/desktop/image-planalto.png",
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    image: "../assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    image: "../assets/home/desktop/image-danche.png",
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

let benefits = [
  {
    image: "../assets/home/desktop/icon-coffee-bean.svg",
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: "../assets/home/desktop/icon-gift.svg",
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: "../assets/home/desktop/icon-truck.svg",
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

let steps = [
  {
    number: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const renderProducts = (arr) => {
  const products = arr
    .map((product) => {
      return `
        <div class="coffee__container">
        <img class="coffee__container--img" src="${product.image}"/>
        <div class="coffee__container--tabletBox">
        <h2 class="coffee__container--title">${product.title}</h2>
        <p class="coffee__container--description">${product.description}</p>
        </div>
        </div>
        `;
    })
    .join("");

  productBox.innerHTML = products;
};
renderProducts(products);

const renderBenefits = (arr) => {
  const benefits = arr
    .map((benefit) => {
      return `
          <div class="benefit__container">
          <img class="benefit__container--img" src="${benefit.image}"/>
          <div class="benefit__container--tabletBox">
          <h2 class="benefit__container--title">${benefit.title}</h2>
          <p class="benefit__container--description">${benefit.description}</p>
          </div>
          </div>
          `;
    })
    .join("");

  benefitsBox.innerHTML = benefits;
};
renderBenefits(benefits);

const renderSteps = (arr) => {
  const steps = arr
    .map((step) => {
      return `
            <div class="step__container">
            <h1 class="step__container--number">${step.number}</h1>
            <h2 class="step__container--title">${step.title}</h2>
            <p class="step__container--description">${step.description}</p>
            </div>
            `;
    })
    .join("");

  stepsBox.innerHTML = steps;
};
renderSteps(steps);

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
