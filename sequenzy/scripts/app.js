const queryParam = new URLSearchParams(window.location.search).get("q");
const Item = DATA[queryParam || 0];

const Hero = {
  H3: document.querySelector(".hero > h3"),
  H2: document.querySelector(".hero > h2"),
  P: document.querySelector(".hero > p"),

  render() {
    this.H3.innerHTML = Item.title;
    this.H2.innerHTML = Item.description;
    this.P.innerHTML = `Practical ${Item.article.framework}`;
  },
};

const Week = {
  Span: document.querySelectorAll(".week > span"),
  AvatarGroup: document.querySelector(".week > figure > .avatar-group"),
  Figcaption: document.querySelector(".week > figure > figcaption"),
  Logos: Item.article.logos.map((item) => {
    const Img = document.createElement("img");
    Img.alt = "";
    Img.src = `./images/${item}`;
    return Img;
  }),

  render() {
    this.Span.forEach((el) => (el.innerHTML = Item.subtitle));
    this.AvatarGroup.append(...this.Logos);
    this.Figcaption.innerHTML = Item.article.headline;
  },
};

const List = {
  Ol: document.querySelector("ol"),
  ListItems: Item.topics.map((item, i) => {
    return `<li class="flex-cx">
      ${item.bonus ? `<small class="xs">TBA</small>` : `<small>W${item.page}</small>`}
      <span>
        ${i < 1 ? `${Item.article.headline} Case Study:` : ""}
        ${item.topic}
      </span>
    </li>`;
  }),

  render() {
    this.Ol.innerHTML = this.ListItems.join("");
  },
};

const CTA = {
  Button: document.querySelector("button"),

  handleClick() {
    const q = location.href.split("=").pop();
    location.assign(`?q=${q == "1" ? "0" : "1"}`);
  },

  render() {
    this.Button.addEventListener("click", this.handleClick);
  },
};

Hero.render();
Week.render();
List.render();
CTA.render();
