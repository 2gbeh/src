const WindowCtrl = {
  controls: [
    { title: "Close", color: "#ff5f56" },
    { title: "Minimize", color: "#ffbd2e" },
    { title: "Maximize", color: "#27c93f" },
  ],
};

WindowCtrl.ul = document.createElement("ul");
WindowCtrl.ul.classList.add("flex-ce");
WindowCtrl.ul.style.gap = "8px";

WindowCtrl.controls.forEach((item) => {
  const li = document.createElement("li");
  li.title = item.title;
  li.style.backgroundColor = item.color;
  li.style.borderRadius = "12px";
  li.style.width = "12px";
  li.style.height = "12px";

  WindowCtrl.ul.append(li);
});

document.querySelector(".screen").prepend(WindowCtrl.ul);
