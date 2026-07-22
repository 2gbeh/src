/**
 * Sumsub | Flamingo
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-07-21
 */

window.addEventListener("load", handleLoad);
document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", handleClick));

const NA = "---";
let tabIndex = 0;

function handleLoad() {
  if (DATA.length) render(DATA[tabIndex]);
}

function handleClick() {
  tabIndex = tabIndex ? 0 : 1;
  render(DATA[tabIndex]);
}

function render(item) {
  // console.log("🚀 ~ item:", item);
  document.querySelector("h1").innerHTML = item?.title || NA;
  document.querySelector("h2").innerHTML = item?.subtitle || NA;
  document.querySelector("p").innerHTML = item?.description || NA;
  document.querySelector("button").style.backgroundColor =
    item?.themeColor || "#32ffc2";
  document.querySelector("button").style.borderColor =
    item?.themeColor || "#32ffc2";
  document.querySelector("h3").innerHTML = item?.article?.headline || NA;
  document.querySelector(".cover p").innerHTML =
    item?.article?.description || NA;
  document.querySelector(".cover img").src = item?.article?.thumbnail || "";
  document.querySelector(".toc p").innerHTML = item?.article?.framework || NA;

  // table of contents
  let listItems = "";
  item?.topics?.map((topic) => {
    listItems += `
    <li>
      <div class="topic">${topic?.topic || NA}</div>
      <div class="line flex-1"></div>
      <div class="page">${topic?.page || 0}</div>
    </li>
  `;
  });

  document.querySelector("ol").innerHTML = listItems;
}
