const Logo = {};

Logo.a = document.querySelector("#logo");
Logo.a.href = "?";

Logo.figure = document.createElement("figure");
Logo.figure.classList.add("flex-cx");
Logo.figure.style.gap = "8px";

Logo.img = document.createElement("img");
Logo.img.src = "./images/icon.png";
Logo.img.alt = "";
Logo.img.width = 24;

Logo.figcaption = document.createElement("figcaption");
Logo.figcaption.style.fontFamily = "Raleway";
Logo.figcaption.style.fontSize = "12px";
Logo.figcaption.style.fontWeight = "700";
Logo.figcaption.style.letterSpacing = "0.5px";
Logo.figcaption.style.whiteSpace = "nowrap";
Logo.figcaption.textContent = "Northwind AI";

Logo.figure.append(Logo.img, Logo.figcaption);
Logo.a.append(Logo.figure);