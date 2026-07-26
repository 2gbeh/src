const Toc = {};

Toc.div = document.createElement("div");
Toc.div.style.maxWidth = "680px";

Toc.ol = document.createElement("ol");
Toc.ol.classList.add("grid-3");
Toc.ol.style.gap = "16px 48px";

Toc.li = (Context.data?.topics || []).map((item) => {
  const strong = document.createElement("strong");
  strong.textContent = item.bonus ? `BONUS: ` : `Week ${item.page}: `;

  const small = document.createElement("small");
  small.textContent = item.topic;

  const li = document.createElement("li");
  li.append(strong, small);

  return li;
});

Toc.ol.append(...Toc.li);

Toc.div.append(Toc.ol);

FooterContent.append(Toc.div);
