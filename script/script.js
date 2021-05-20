const productBox = document.getElementById("products__container");

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
