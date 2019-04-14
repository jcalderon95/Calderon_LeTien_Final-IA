// JavaScript Document

(function(){
	"use strict";
	
	console.log("fired!!!");

	var button         =  	document.querySelector("#button");
	var burgerCon      =  	document.querySelector("#burgerCon");
	var accordions     =  	document.querySelectorAll(".accordion");
	var welcomeSection =  	document.querySelector(".welcomeCon");
	var links   	   =  	document.querySelectorAll("#mainNav a");
	var footerLinks    =  	document.querySelectorAll(".footerNav a");
	var images		   =  	document.querySelectorAll(".merch img");
	var lightboxImage  =  	document.querySelector('.lightboxImage');
	var lightbox 	   = 	document.querySelector('.lightbox');
	var lbClose	 	   =	document.querySelector('.lightbox-close');

	// welcome section animation
	TweenLite.from(welcomeSection, 2, {y:40, opacity: 0, delay: 0.6});

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

	function scrollLink(e){
		// console.log("links fired");
		e.preventDefault();
		let targetArea = e.currentTarget.id.slice(0,-3);
		TweenLite.to(window, 1, {scrollTo:{y:`#${targetArea}`, offsetY:50, autoKill:false}});
	}


	function openLightbox() {
		// console.log(this.className);

		// targetImage = this.className;

		lightboxImage.src = `images/merch_${this.className}.jpg`;

		lightbox.classList.add('lightbox-on');
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
	}


	button.addEventListener("click", hamburgerMenu, false);

	window.addEventListener("resize", closeMenu);

	accordions.forEach(accordion => accordion.addEventListener('click', openClose));

	links.forEach(link => link.addEventListener('click', scrollLink));

	footerLinks.forEach(link => link.addEventListener('click', scrollLink));

	images.forEach(image => image.addEventListener('click', openLightbox));

	lbClose.addEventListener('click', closeLightbox);
		
})();