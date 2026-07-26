const HeroContent = {
  tags: ["@2gbeh", "#build-in-public"],
};

HeroContent.h1 = document.createElement("h1");
// HeroContent.h1.classList.add("text-5xl");
// HeroContent.h1.style.textAlign = "center";
// HeroContent.h1.style.fontWeight = "600";
// HeroContent.h1.style.lineHeight = "58px";
// HeroContent.h1.style.letterSpacing = "1px";
HeroContent.h1.innerHTML = `${Context.data?.title}<br/>${Context.data?.subtitle}`;

HeroContent.p = document.createElement("p");
// HeroContent.p.classList.add("text-lg");
// HeroContent.p.style.marginTop = "8px";
// HeroContent.p.style.width = "600px";
// HeroContent.p.style.textAlign = "center";
// HeroContent.p.style.lineHeight = "28px";
// HeroContent.p.style.letterSpacing = "0.5px";
HeroContent.p.textContent = Context.data?.description;

HeroContent.address = document.createElement("address");
HeroContent.address.classList.add("flex-cx");
HeroContent.address.style.gap = "8px";
HeroContent.address.style.marginTop = "-12px";
HeroContent.address.style.fontSize = "15px";
HeroContent.address.style.fontStyle = "normal";

HeroContent.u = document.createElement("u");
HeroContent.u.style.color = "var(--muted)";
HeroContent.u.style.fontWeight = 500;
HeroContent.u.style.textDecoration = "underline dotted";
HeroContent.u.style.textUnderlineOffset = "4px";
HeroContent.u.textContent = "TikTok Live Q&A Session on Fridays at 10AM WAT";

HeroContent.a = HeroContent.tags.map((item) => {
  const a = document.createElement("a");
  // a.style.color = "var(--primary)";
  a.textContent = item;
  a.style.fontSize = "16px";
  a.style.fontWeight = 500;
  return a;
});

HeroContent.address.append(HeroContent.u, ...HeroContent.a);

Hero.append(HeroContent.h1, HeroContent.p, HeroContent.address);
