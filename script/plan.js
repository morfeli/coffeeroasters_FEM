const processBox = document.getElementById("processes__container");
const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const arrowButton = document.getElementsByClassName("question__container--img");
let headers = document.getElementsByClassName("options__container--option");

const options = document.getElementsByClassName("options__container");
const preferences = document.getElementsByName("preferences");
const beanType = document.getElementsByName("beanType");
const quantity = document.getElementsByName("quantity");
const grind = document.getElementsByName("grindType");
const deliveries = document.getElementsByName("deliveryType");

const dataPreference = document.querySelector(".jsPreference");
const dataBean = document.querySelector(".jsBean");
const dataQuantity = document.querySelector(".jsQuantity");
const dataGrind = document.querySelector(".jsGrind");
const dataDelivery = document.querySelector(".jsDelivery");
const coffeePrice = document.querySelectorAll("[data-price]");

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

//
let process = [
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

const renderProcess = (arr) => {
  const processes = arr
    .map((process) => {
      return ` 
            <div class="steps__container">
            <h1 class="steps__container--number">${process.number}</h1>
            <h2 class="steps__container--title">${process.title}</h2>
            <p class="steps__container--description">${process.description}</p>
            </div>
        `;
    })
    .join("");

  processBox.innerHTML = processes;
};
renderProcess(process);
//

document.querySelectorAll("input[type=radio]").forEach((elem) => {
  elem.addEventListener("click", addChecked);
});
function addChecked() {
  document.querySelectorAll("input[type=radio]").forEach((elem) => {
    elem.removeAttribute("checked");
  });
  document
    .querySelectorAll("input[type=radio]:checked")[0]
    .setAttribute("checked", "true");
}

const questionBox = document.getElementsByClassName("question__container");
[...questionBox].forEach((el) => {
  const arrow = el.querySelector(".question__container--img");
  el.addEventListener("click", (event) => {
    const subMenu = event.target.parentElement.parentElement.querySelector(
      ".options__container"
    );
    subMenu.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });
});

//
function loopOptionDivs() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", (e) => {
      const target = e.target;

      if (target.type === "radio") {
        callLoopRadioBtns();
      }
    });
  }
}
loopOptionDivs();

function loopRadioBtns(arr, spanEl) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element.checked) {
      spanEl.textContent = element.value;
    }
  }
}

function callLoopRadioBtns() {
  loopRadioBtns(preferences, dataPreference);
  loopRadioBtns(beanType, dataBean);
  loopRadioBtns(quantity, dataQuantity);
  loopRadioBtns(grind, dataGrind);
  loopRadioBtns(deliveries, dataDelivery);
}
callLoopRadioBtns();
//

const capsule = document.getElementById("capsule");
const filter = document.getElementById("filter");
const espresso = document.getElementById("espresso");

const single = document.getElementById("single");
const decaf = document.getElementById("decaf");
const blended = document.getElementById("blended");

const small = document.getElementById("250g");
const medium = document.getElementById("500g");
const large = document.getElementById("1000g");

const wholebean = document.getElementById("wholebean");
const filtergrind = document.getElementById("filtergrind");
const cafetiere = document.getElementById("cafetiére");

const everyweek = document.getElementById("everyweek");
const every2weeks = document.getElementById("every2weeks");
const everymonth = document.getElementById("everymonth");

capsule.addEventListener("click", () => {
  questionBox[3].children[0].classList.add("question--disabled");
  if (capsule.checked) {
    document.getElementById("as/using").innerHTML = "using";
  }
});

filter.addEventListener("click", () => {
  questionBox[3].children[0].classList.remove("question--disabled");
  if (filter.checked) {
    document.getElementById("as/using").innerHTML = "as";
  }
});

espresso.addEventListener("click", () => {
  questionBox[3].children[0].classList.remove("question--disabled");
  if (espresso.checked) {
    document.getElementById("as/using").innerHTML = "as";
  }
});
