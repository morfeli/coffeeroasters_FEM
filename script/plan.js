const processBox = document.getElementById("processes__container");
const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
const arrowButton = document.getElementsByClassName("question__container--img");
const optionBox = document.getElementsByClassName("options__container--option");

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

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

// let headers = document.getElementsByClassName("options__container--option");
// for (i = 0; i < headers.length; i++) {
//   headers[i].addEventListener("click", function () {
//     let isNotActive = !this.classList.contains("active");
//     for (const option of headers) {
//       option.classList.remove("active");
//     }

//     if (isNotActive) {
//       this.classList.toggle("active");
//     }
//   });
// }

let headers = document.getElementsByClassName("options__container--option");

function getSectionId(header) {
  return header.parentNode.parentNode.id;
}

for (i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    let isNotActive = !this.classList.contains("active");
    let sectionsId = getSectionId(this);

    console.log(`sectionsId: ${sectionsId}`);

    for (const header of headers) {
      if (getSectionId(header) == sectionsId) {
        header.classList.remove("active");
      }
    }

    if (isNotActive) {
      this.classList.add("active");
    }
  });
}

console.log(headers);
