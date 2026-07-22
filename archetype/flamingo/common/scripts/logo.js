const logo = document.querySelector("#logo");

const figure = document.createElement("figure");
figure.style.display = "flex";
figure.style.alignItems = "center";
figure.style.gap = "12px";

const img = document.createElement("img");
img.src = "../common/images/icon.png";
img.alt = "";
img.width = 30;

const figcaption = document.createElement("figcaption");
figcaption.style.whiteSpace = "nowrap";
figcaption.style.fontSize = "16px";
figcaption.style.fontWeight = "700";
figcaption.style.letterSpacing = "0.5px";
figcaption.style.fontFamily = "Raleway";
figcaption.textContent = "Northwind AI";

figure.append(img, figcaption);
logo.append(figure);