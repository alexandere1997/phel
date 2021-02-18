import animatet from "./modul/animate";
import menu from "./modul/menu";
import scrolling from "./modul/scrolling";

animatet();
menu();
scrolling();

document.body.style.overflow = "hidden";

window.onload = function() {
	let preloader = document.getElementById('cube-loader');
  preloader.style.display = 'none';
  document.body.style.overflowY = "auto";
};