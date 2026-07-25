const Logo = {};

Logo.a = document.createElement("a");
Logo.a.href = "?";

Logo.figure = document.createElement("figure");
Logo.figure.classList.add("flex-cx");
Logo.figure.style.gap = "12px";

Logo.img = document.createElement("img");
Logo.img.src = "./images/icon.png";
Logo.img.alt = "";
Logo.img.width = 30;

Logo.figcaption = document.createElement("figcaption");
Logo.figcaption.style.fontFamily = "Raleway";
Logo.figcaption.style.fontWeight = "700";
Logo.figcaption.style.letterSpacing = "0.5px";
Logo.figcaption.style.whiteSpace = "nowrap";
Logo.figcaption.textContent = "Northwind AI";

Logo.figure.append(Logo.img, Logo.figcaption);
Logo.a.append(Logo.figure);

Header.append(Logo.a);
