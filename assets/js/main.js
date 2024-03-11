/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});
	

})(jQuery);

// Humburger Menu.
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


// Define variables useful in Navigation Focus part
const sections = document.querySelectorAll("#main > section");
const navLi = document.querySelectorAll(".nav-links a");

// Navigation Bar on Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.documentElement.scrollTop > 120 & !document.getElementById("scroll-nav").classList.contains("hide")) {
		document.getElementById("scroll-nav").style.display = "flex";
		document.getElementById("scroll-nav").style.top = "0px";
		if (document.getElementById("openbtn").classList.contains("show")) {
			document.getElementById("openbtn").classList.remove('show');
		}
		//document.getElementById("openbtn").className = "openbtn";
	} else {
		var obj = document.getElementById("scroll-nav");
		obj.style.display="none";
		if (document.documentElement.scrollTop > 150) {
			document.getElementById("openbtn").classList.add('show');
		}
		else {
			if (document.getElementById("openbtn").classList.contains("show")) {
				document.getElementById("openbtn").classList.remove('show');
			}
			//document.getElementById("openbtn").className = "openbtn";
		}
	}

	
	// Navigation Focus
	var current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (document.documentElement.scrollTop >= sectionTop - 180) {
			current = section.getAttribute("id"); 
		}
	});
	
	navLi.forEach((li) => {
		li.classList.remove("focus");
		if (li.hash=="#"+current) {
			li.classList.add("focus");
		}
		if (current=="") {
			document.getElementById("about-link-top").classList.add("focus");
		}
	});	
}

// Prevent fixed navigations covering content
const navigationHeight = document.querySelector('#scroll-nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 20 + "px");


// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
	document.getElementById("scroll-nav").style.display = "none";
	document.getElementById("scroll-nav").classList.add('hide');
	document.getElementById("openbtn").classList.add('show');
}

// Show the scroll navigation bar when the button was clicked
function openNav() {
	document.getElementById("scroll-nav").style.display = "flex";
	//document.getElementById("scroll-nav").className = "scroll-nav";
	//document.getElementById("openbtn").className = "openbtn";
	if (document.getElementById("scroll-nav").classList.contains("hide")) {
		document.getElementById("scroll-nav").classList.remove('hide');
	}
	if (document.getElementById("openbtn").classList.contains("show")) {
		document.getElementById("openbtn").classList.remove('show');
	}
}


// Fades in the button when you scroll down
var link = document.getElementById("back-to-top");
var amountScrolled = 250;
  
window.addEventListener('scroll', function(e) {
	if ( document.documentElement.scrollTop > amountScrolled ) {
		link.classList.add('show');
	} else {
		link.className = 'back-to-top';
	}
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

// Skill section bar
document.addEventListener('DOMContentLoaded', (event) => {
	const skillPercentages = document.querySelectorAll('.skill-percentage');
	skillPercentages.forEach(skillPercentage => {
		const width = skillPercentage.style.width;
		skillPercentage.style.width = '0';
		setTimeout(() => {
		skillPercentage.style.width = width;
		}, 500);
	});


	// Attach event listeners to the pie chart segments
	document.querySelector('#programming-container-pie').addEventListener('mouseover', function() {
		showContainer('programming-container');
	});
	document.querySelector('#skills-wrapper-pie').addEventListener('mouseover', function() {
		showContainer('skills-wrapper');
	});
	document.querySelector('#soft-list-pie').addEventListener('mouseover', function() {
		showContainer('soft-list');
	});

	// Adding the mouseout event listeners
	document.querySelector('#programming-container-pie').addEventListener('mouseout', showSkillsIntro);
	document.querySelector('#skills-wrapper-pie').addEventListener('mouseout', showSkillsIntro);
	document.querySelector('#soft-list-pie').addEventListener('mouseout', showSkillsIntro);

	function showContainer(containerId) {
		// Hide all containers
		document.querySelector('.skillsintro-container').style.display = 'none';
		document.querySelector('.programming-container').style.display = 'none';
		document.querySelector('.skills-wrapper').style.display = 'none';
		document.querySelector('.soft-list').style.display = 'none';

		// Show the selected container
		document.querySelector(`.${containerId}`).style.display = 'block';
		if (containerId=="skills-wrapper") {
			document.querySelector(`.${containerId}`).style.display = 'flex';
		}
	}

	function showSkillsIntro() {
		// Hide all specific skill containers
		document.querySelector('.programming-container').style.display = 'none';
		document.querySelector('.skills-wrapper').style.display = 'none';
		document.querySelector('.soft-list').style.display = 'none';
	
		// Show the skills intro container
		document.querySelector('.skillsintro-container').style.display = 'block';
	}
});
