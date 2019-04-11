// JavaScript Document

(function(){
	"use strict";
	
	console.log("fired!!!");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var accordions = document.querySelectorAll(".accordion");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function closeMenu() {

		if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
		console.log("media query fired");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
		}

	}

	function openClose(e){
		e.currentTarget.classList.toggle('plusMinus');
		e.currentTarget.nextElementSibling.classList.toggle('isOpen');
	}


	button.addEventListener("click", hamburgerMenu, false);

	window.addEventListener("resize", closeMenu);

	accordions.forEach(accordion => accordion.addEventListener('click', openClose));

		
})();