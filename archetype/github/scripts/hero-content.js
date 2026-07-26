const HeroContent = {
  tags: ["@2gbeh", "#build-in-public"],
};

HeroContent.h1 = document.createElement("h1");
HeroContent.h1.classList.add("text-6xl");
HeroContent.h1.style.textAlign = "center";
HeroContent.h1.style.fontWeight = "600";
HeroContent.h1.style.lineHeight = "68px";
HeroContent.h1.style.letterSpacing = "1px";
HeroContent.h1.textContent = `${Context.data?.title} ${Context.data?.subtitle}`;

HeroContent.p = document.createElement("p");
HeroContent.p.classList.add("text-lg");
HeroContent.p.style.width = "600px";
HeroContent.p.style.textAlign = "center";
HeroContent.p.style.lineHeight = "28px";
HeroContent.p.style.letterSpacing = "0.5px";
HeroContent.p.textContent = Context.data?.description;

HeroContent.address = document.createElement("address");
HeroContent.address.classList.add("flex-cx");
HeroContent.address.style.fontSize = "14px";
HeroContent.address.style.fontStyle = "normal";
HeroContent.address.style.gap = "8px";

HeroContent.u = document.createElement("u");
HeroContent.u.style.color = "var(--input-active)";
HeroContent.u.style.textDecoration = "underline dashed";
HeroContent.u.style.textUnderlineOffset = "4px";
HeroContent.u.textContent = "TikTok Live Q&A Session on Fridays at 10AM WAT";

HeroContent.a = HeroContent.tags.map((item) => {
  const a = document.createElement("a");
  a.style.color = "var(--kaggle)";
  a.textContent = item;
  return a;
});

HeroContent.address.append(HeroContent.u, ...HeroContent.a);

Hero.append(HeroContent.h1, HeroContent.p, HeroContent.address);
