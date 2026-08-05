/**
 * Archetype - GitHub
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-07-22
 */
 
 const queryParam = new URLSearchParams(window.location.search).get("q");
const index = Number(queryParam || 0);
const Context = {
  index,
  data: DATA[index] || {},
};

const Header = document.querySelector("header");
const Hero = document.querySelector(".hero");
const FooterContent = document.querySelector(".footer-content");
