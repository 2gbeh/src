const User = {};

User.figure = document.createElement("figure");
User.figure.classList.add("flex-cx");
User.figure.style.gap = "16px";

User.imgContainer = document.createElement("div");
User.imgContainer.style.position = "relative";

User.img = document.createElement("img");
User.img.src = "./images/avatar.png";
User.img.alt = "";
User.img.width = 40;
User.img.style.border = "2px solid wheat";
User.img.style.borderRadius = "40px";

User.indicator = document.createElement("div");
User.indicator.classList.add("indicator");
User.indicator.style.right = "2px";
User.indicator.style.bottom = "6px";

User.imgContainer.append(User.img, User.indicator);

User.figcaption = document.createElement("figcaption");
User.figcaption.classList.add("flex-cx");
User.figcaption.style.gap = "4px";
User.figcaption.style.letterSpacing = "0.5px";
User.figcaption.textContent = "Emanuel";

User.i = document.createElement("i");
User.i.className = "ti ti-caret-down-filled";
User.i.style.color = "var(--border)";
User.i.style.margin = "2px 0 0 4px";

User.figcaption.append(" ", User.i);

User.figure.append(User.imgContainer, User.figcaption);

Header.append(User.figure);

