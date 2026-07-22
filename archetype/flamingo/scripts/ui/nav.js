const nav = document.createElement("nav");
nav.className = "flex-cx";

const links = [
  { text: "Planning", dropdown: false },
  { text: "Requirements Analysis", dropdown: false },
  { text: "Design", dropdown: true },
  { text: "Development", dropdown: true },
  { text: "Testing", dropdown: true },
  { text: "Deployment", dropdown: true },
  { text: "Maintenance", dropdown: true },
];

links.forEach(({ text, dropdown }) => {
  const a = document.createElement("a");
  a.href = "";
  a.textContent = text;

  if (dropdown) {
    const icon = document.createElement("i");
    icon.className = "ti ti-chevron-down";
    a.append(" ", icon);
  }

  nav.append(a);
});

document.body.append(nav);