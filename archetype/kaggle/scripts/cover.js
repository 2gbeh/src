const Cover = {};

Cover.div = document.createElement("div");
Cover.div.classList.add("flex-col");
Cover.div.style.gap = "16px";
Cover.div.style.maxWidth = "320px";

Cover.figure = document.createElement("figure");
Cover.figure.classList.add("flex-cx");
Cover.figure.style.gap = "12px";

Cover.avatarGroup = document.createElement("div");
Cover.avatarGroup.classList.add("avatar-group");

Cover.avatars = (Context?.data?.article?.logos || []).map((item) => {
  const img = document.createElement("img");
  img.src = `./images/${item || "logo-hwp.png"}`;
  img.alt = "";

  return img;
});

Cover.avatarGroup.append(...Cover.avatars);

Cover.figcaption = document.createElement("figcaption");
Cover.figcaption.classList.add("text-2xl");
Cover.figcaption.style.fontWeight = 600;
Cover.figcaption.textContent = Context?.data?.article?.headline;

Cover.figure.append(Cover.avatarGroup, Cover.figcaption);

Cover.caseStudy = document.createElement("p");
Cover.caseStudy.style.color = "var(--muted)";
Cover.caseStudy.textContent = Context?.data?.article?.description;

Cover.strong = document.createElement("strong");
Cover.strong.textContent = "Capstone: ";

// Cover.caseStudy.prepend(Cover.strong);

Cover.framework = document.createElement("p");
Cover.framework.textContent = Context?.data?.article?.framework;

Cover.techStack = document.createElement("div");
Cover.techStack.classList.add("flex-cx");
Cover.techStack.style.gap = "4px";
Cover.techStack.style.flexWrap = "wrap";

Cover.tech = (Context?.data?.article?.techStack || []).map((item) => {
  const img = document.createElement("img");
  img.src = `https://img.shields.io/badge/${item}`;
  img.alt = "";

  return img;
});

Cover.techStack.append(...Cover.tech);

Cover.div.append(
  Cover.figure,
  Cover.caseStudy,
  // Cover.framework,
  Cover.techStack
);

FooterContent.append(Cover.div);
