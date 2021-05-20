const productBox = document.getElementById("products__container");
const benefitsBox = document.getElementById("benefits__container");

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
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: "../assets/home/desktop/image-piccollo.png",
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    image: "../assets/home/desktop/image-danche.png",
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
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

const renderProducts = (arr) => {
  const products = arr
    .map((product) => {
      return `
        <div class="coffee__container">
        <img class="coffee__container--img" src="${product.image}"/>
        <h2 class="coffee__container--title">${product.title}</h2>
        <p class="coffee__container--description">${product.description}</p>
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
          <h2 class="benefit__container--title">${benefit.title}</h2>
          <p class="benefit__container--description">${benefit.description}</p>
          </div>
          `;
    })
    .join("");

  benefitsBox.innerHTML = benefits;
};
renderBenefits(benefits);
