const body = document.querySelector('body');
const themeButton = document.querySelector('#theme-button');
const tagline = document.querySelector('.tagline');
const resourceContainer = document.querySelector('.resource-container');
const teamMembers = document.querySelector('.team-members');
const contact = document.querySelector('.contact');

const getDarkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
	localStorage.setItem("darkMode", "enabled");

	body.classList.add('dark');
	tagline.classList.add('tagline-dark');
	resourceContainer.classList.add('resource-container-dark');
	teamMembers.classList.add('team-members-dark');
	contact.classList.add('contact-dark');

	themeButton.innerHTML = '<i class="fa fa-sun-o"></i>';
	themeButton.style.backgroundColor = "white";
	themeButton.style.color = "black";
}

const disableDarkMode = () => {
	localStorage.setItem("darkMode", "disabled");

	body.classList.remove('dark');
	tagline.classList.remove('tagline-dark');
	resourceContainer.classList.remove('resource-container-dark');
	teamMembers.classList.remove('team-members-dark');
	contact.classList.remove('contact-dark');

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
