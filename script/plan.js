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

const modalPreference = document.querySelector(".jsModalPreference");
const modalBean = document.querySelector(".jsModalBean");
const modalQuantity = document.querySelector(".jsModalQuantity");
const modalGrind = document.querySelector(".jsModalGrind");
const modalDelivery = document.querySelector(".jsModalDelivery");

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

function callLoopRadioBtns() {
  loopRadioBtns(preferences, dataPreference);
  loopRadioBtns(beanType, dataBean);
  loopRadioBtns(quantity, dataQuantity);
  loopRadioBtns(grind, dataGrind);
  loopRadioBtns(deliveries, dataDelivery);
}
callLoopRadioBtns();

function loopRadioBtns(arr, spanEl) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element.checked) {
      spanEl.textContent = element.value;
    }
  }
}

const modalBtn = document.getElementById("confirm");
const summaryBox = document.querySelector(".summary__container--orderBox");
modalBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal__container");
  modal.classList.toggle("open");
  document.getElementById("modal-summary").innerHTML =
    summaryBox.children[1].innerHTML;
});

capsule.addEventListener("click", () => {
  questionBox[3].children[0].classList.add("question--disabled");
  if (capsule.checked) {
    document.getElementById("as/using").innerHTML = "using";
  }
  if (capsule.checked) {
    document.querySelector(".is-hidden").classList.add("disable");
    document.querySelector(".jsGrind").classList.add("disable");
    let test = document.querySelectorAll(".summary__container--text");
    test[3].classList.add("disable");
    // let submenus = document.getElementsByClassName("options__container");
    // submenus[3].classList.add("disable");
  }
});

filter.addEventListener("click", () => {
  questionBox[3].children[0].classList.remove("question--disabled");
  if (filter.checked) {
    document.getElementById("as/using").innerHTML = "as";
  }
  if (filter.checked) {
    document.querySelector(".is-hidden").classList.remove("disable");
    document.querySelector(".jsGrind").classList.remove("disable");
    let test = document.querySelectorAll(".summary__container--text");
    test[3].classList.remove("disable");
  }
});

espresso.addEventListener("click", () => {
  questionBox[3].children[0].classList.remove("question--disabled");
  if (espresso.checked) {
    document.getElementById("as/using").innerHTML = "as";
  }
  if (espresso.checked) {
    document.querySelector(".is-hidden").classList.remove("disable");
    document.querySelector(".jsGrind").classList.remove("disable");
    let test = document.querySelectorAll(".summary__container--text");
    test[3].classList.remove("disable");
  }
});

small.addEventListener("click", () => {
  if (small.checked) {
    document.getElementById("price1").innerHTML = "$7.20";
    document.getElementById("price2").innerHTML = "$9.60";
    document.getElementById("price3").innerHTML = "$12.00";
  }
});

medium.addEventListener("click", () => {
  if (medium.checked) {
    document.getElementById("price1").innerHTML = "$13.00";
    document.getElementById("price2").innerHTML = "$17.50";
    document.getElementById("price3").innerHTML = "$22.00";
  }
});

large.addEventListener("click", () => {
  if (large.checked) {
    document.getElementById("price1").innerHTML = "$22.00";
    document.getElementById("price2").innerHTML = "$32.00";
    document.getElementById("price3").innerHTML = "$42.00";
  }
});

const checkoutPrice = () => {
  const twofifty = document.getElementById("250g");
  const fivehun = document.getElementById("500g");
  const onek = document.getElementById("1000g");
  const week = document.getElementById("everyweek");
  const twoweeks = document.getElementById("every2weeks");
  const onemonth = document.getElementById("everymonth");
  twofifty.addEventListener("click", () => {
    if (twofifty.checked && week.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$22.80";
    }
    if (twofifty.checked && twoweeks.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$19.20";
    }
    if (twofifty.checked && onemonth.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$12.00";
    }
  });
  fivehun.addEventListener("click", () => {
    if (fivehun.checked && week.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$52.80";
    }
    if (fivehun.checked && twoweeks.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$35.00";
    }
    if (fivehun.checked && onemonth.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$22.00";
    }
  });
  onek.addEventListener("click", () => {
    if (onek.checked && week.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$88.00";
    }
    if (onek.checked && twoweeks.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$64.00";
    }
    if (onek.checked && onemonth.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$42.00";
    }
  });
  week.addEventListener("click", () => {
    if (week.checked && twofifty.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$22.80";
    }
    if (week.checked && fivehun.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$19.20";
    }
    if (week.checked && onek.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$12.00";
    }
  });
  twoweeks.addEventListener("click", () => {
    if (twoweeks.checked && twofifty.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$19.20";
    }
    if (twoweeks.checked && fivehun.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$35.00";
    }
    if (twoweeks.checked && onek.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$64.00";
    }
  });
  onemonth.addEventListener("click", () => {
    if (onemonth.checked && twofifty.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$12.00";
    }
    if (onemonth.checked && fivehun.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$22.00";
    }
    if (onemonth.checked && onek.checked) {
      document.getElementById("jsCheckoutPrice").innerHTML = "$42.00";
    }
  });
};
checkoutPrice();
