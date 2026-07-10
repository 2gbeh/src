/**
 * Cascade
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-07-10
 */

window.addEventListener("load", main);

const slideSection = document.querySelector("#slide-section");
const diagramSection = document.querySelector("#diagram-section");
const diagramImage = document.querySelector("#diagram-section > img");
const headerFigcaption = document.querySelector("header figcaption");
const slideButtons = document.querySelectorAll(
  "#slide-input-container > button"
);
const slideInput = document.querySelector("#slide-input-container > select");
const diagramResetButton = document.querySelector(
  "#diagram-input-container > button"
);
const diagramInput = document.querySelector(
  "#diagram-input-container > select"
);
const speakerButtons = document.querySelectorAll(
  "#speaker-input-container > button"
);

slideButtons.forEach((el) => el.addEventListener("click", handleClickSlide));
slideInput.addEventListener("change", handleChangeSlide);
diagramResetButton.addEventListener("click", handleResetDiagram);
diagramInput.addEventListener("change", handleChangeDiagram);
speakerButtons.forEach((el) =>
  el.addEventListener("click", handleClickSpeaker)
);

function main() {
  // prefill slide options
  if (SLIDE) {
    const options = Object.entries(SLIDE).map(
      ([key, value]) => `<option value="${key}">${value}</option>`
    );
    slideInput.insertAdjacentHTML("beforeend", options.join(""));
  }

  // prefill diagram options
  if (DIAGRAM) {
    const options = Object.entries(DIAGRAM).map(
      ([key, _]) => `<option value="${key}">${key}</option>`
    );
    diagramInput.insertAdjacentHTML("beforeend", options.join(""));
  }
}

function handleClickSlide(ev) {
  if (SLIDE) {
    const keys = Object.keys(SLIDE);
    const size = keys.length;
    const firstKey = keys[0]; // intro
    const lastKey = keys[size - 1]; // trivia
    const currentIndex = keys.findIndex((key) => key === slideInput.value);
    let [newIndex, newKey] = [-1, ""];

    switch (ev.target.title) {
      case "Previous":
        newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        newKey = keys[newIndex];
        break;
      case "Next":
        newIndex = currentIndex < size - 1 ? currentIndex + 1 : size - 1;
        newKey = keys[newIndex];
        break;
      case "End":
        newKey = lastKey;
        break;
      default:
        newKey = firstKey;
    }

    slideInput.value = newKey;
    headerFigcaption.innerText = SLIDE[newKey];
  }
}

function handleChangeSlide(ev) {
  if (SLIDE) {
    const key = ev.target.value;
    headerFigcaption.innerText = SLIDE[key];
  }
}

function handleChangeDiagram(ev) {
  const key = ev.target.value;
  if (DIAGRAM && key) {
    slideSection.setAttribute("class", "hidden");
    diagramSection.removeAttribute("class");
    diagramImage.src = DIAGRAM[key];
  }
}

function handleResetDiagram() {
  slideSection.removeAttribute("class");
  diagramSection.setAttribute("class", "hidden");
  diagramInput.value = "";
}

function handleClickSpeaker(ev) {
  console.log("🚀 ~ handleClickSpeaker ~ ev:", ev.target.title);
}
