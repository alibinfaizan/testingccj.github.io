const body = document.querySelector('body');
const themeButton = document.querySelector('#theme-button');
const tagline = document.querySelector('.tagline');
const resourceContainer = document.querySelector('.resource-container');
const roadmapContainer = document.querySelector('.roadmap-container');
const contactUs = document.querySelector('.contact-us');
const community = document.querySelector('.community');


const comingSoon = document.querySelectorAll(".coming-soon");

for (var i = 0; i < comingSoon.length; i++) {
	comingSoon[i].addEventListener('click', () => {
		alert("Will be available Soon!");
	})
}

const getDarkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
	localStorage.setItem("darkMode", "enabled");

	body.classList.add('dark');
	tagline.classList.add('tagline-dark');
	resourceContainer.classList.add('resource-container-dark');
	roadmapContainer.classList.add('roadmap-container-dark');
	contactUs.classList.add('contact-us-dark');
	community.classList.add('community-dark');

	themeButton.innerHTML = '<i class="fa fa-sun-o"></i>';
	themeButton.style.backgroundColor = "white";
	themeButton.style.color = "black";
}

const disableDarkMode = () => {
	localStorage.setItem("darkMode", "disabled");

	body.classList.remove('dark');
	tagline.classList.remove('tagline-dark');
	resourceContainer.classList.remove('resource-container-dark');
	roadmapContainer.classList.remove('roadmap-container-dark');
	contactUs.classList.remove('contact-us-dark');
	community.classList.remove('community-dark');

	themeButton.innerHTML = '<i class="fa fa-moon-o"></i>';
	themeButton.style.backgroundColor = "black";
	themeButton.style.color = "white";
}


if (getDarkMode == "enabled") {
	enableDarkMode();
}


const darkMode = () => {
	if (themeButton.innerHTML == '<i class="fa fa-moon-o"></i>') {
		enableDarkMode();
	} else {
		disableDarkMode();	
	}
}