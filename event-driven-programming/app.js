/**
 * Event Driven Programming Pt.2
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-07-08
 */

window.addEventListener("load", fetchEpisodes);
document
  .querySelector("#search-toggle")
  .addEventListener("click", toggleSearchBar);
document.querySelector("#search-input").addEventListener("input", handleSearch);

const DEV_MODE = 0;
const API_URL =
  "https://raw.githubusercontent.com/2gbeh/src/main/event-driven-programming";
const APP_URL = DEV_MODE
  ? "../../northwind-ai/client/public"
  : "https://northwindai.org";

class Episode {
  id; // 20
  datetime; // 2026-07-08T09:00:00.000Z
  thumbnail; // /uploads/logos/oau.jpg
  topic; // Event-Driven Programming Pt.2
  speakers; // ["Emanuel"]
  virtualLink; // https://youtu.be/dhMPSzedWNQ"

  constructor(episode) {
    this.id = episode?.id || -1;
    this.datetime = episode?.datetime || "1970-01-01T00:00:00.000Z";
    this.thumbnail = episode?.thumbnail || null;
    this.topic = episode?.topic || "---";
    this.speakers = episode?.speakers || [];
    this.virtualLink = episode?.virtualLink || "#";
  }

  /** @returns {string} ~ "Jul 8" */
  get toStrDateTime() {
    const dateObj = new Date(this.datetime);
    const day = dateObj.getDate(); // 1-31
    const monthIndex = dateObj.getMonth(); // 0-11
    const monthNamesShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${monthNamesShort[monthIndex]} ${day}`;
  }

  get toStrSpeakers() {
    const max = 32;
    const csv = this.speakers.join(", ");
    const truncated = csv.length > max ? csv.slice(0, max) + "..." : csv;

    return truncated;
  }
}

/** @type {Episode[]} */
let collection = [];

async function fetchEpisodes() {
  try {
    const res = await fetch(`${API_URL}/data.json`);
    const collection = await res.json();
    renderEpisodes(collection);
  } catch (err) {
    console.error(err);
  }
}

function toggleSearchBar() {
  const target = document.querySelector(".search-container");
  const isHidden = target.style.display === "none";

  target.style.display = isHidden ? "block" : "none";
  document.querySelector("#search-input").value = ""; // reset input
  !isHidden && renderEpisodes(collection); // reset list
}

function handleSearch(event) {
  const value = event.target.value.trim();
  const regex = new RegExp(value, "i"); // case-insensitive

  const matchTopic = (topic = "") => regex.test(topic);
  const matchSpeaker = (speakers = []) =>
    speakers.some((speaker) => regex.test(speaker));

  const filtered = collection.filter(
    (episode) => matchTopic(episode.topic) || matchSpeaker(episode.speakers)
  );

  renderEpisodes(filtered);
}

function renderEpisodes(episodes) {
  // console.log("🚀 ~ renderEpisodes ~ episodes:", episodes);
  let listItems = "";

  episodes.forEach((episode) => {
    const episodeObj = new Episode(episode);
    const listItem = `<li onclick="handleClickEpisode('${episodeObj.virtualLink}')">
      <figure>${
        episodeObj?.thumbnail
          ? `<img src="${APP_URL}${episodeObj.thumbnail}" alt="" />`
          : `<svg viewBox="0 0 24 24" style="width: 28px; height: 28px; fill: #e9edef">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>`
      }</figure>
      <article>
        <div class="headline">
          <strong>${episodeObj.toStrSpeakers}</strong>
          <time datetime="${episodeObj.datetime}">${episodeObj.toStrDateTime}</time>
        </div>
        <small class="summary">${episodeObj.topic}</small>
      </article>
    </li>`;

    listItems += listItem;
  });

  document.querySelector("#root").innerHTML =
    `<ol class="list">${listItems}</ol>`;
}

function handleClickEpisode(virtualLink) {
  if (virtualLink !== "#") window.open(virtualLink, "_blank", "noopener");
}
