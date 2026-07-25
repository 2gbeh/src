const Nav = {};

Nav.nav = document.createElement("nav");
Nav.nav.classList.add("flex-cc", "flex-1");
Nav.nav.style.gap = "16px";
Nav.nav.style.letterSpacing = "0.5px";

Nav.a = (Context.data?.chapters || []).map((item) => {
  const a = document.createElement("a");
  a.href = "#";
  a.classList.add("flex-cx");
  a.textContent = item.chapter;

  if (typeof item.subChapters === "undefined") {
    const i = document.createElement("i");
    i.className = "ti ti-chevron-down";
    i.style.color = "var(--border)";
    i.style.margin = "4px 0 0 4px";
    a.append(" ", i);
  }

  return a;
});

Nav.nav.append(...Nav.a);

Header.append(Nav.nav);
