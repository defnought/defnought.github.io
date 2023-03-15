
document.addEventListener('DOMContentLoaded', setTheme);
document.addEventListener('DOMContentLoaded', themeChange);

function themeChange() {
  
	let button = document.querySelector('.theme-toggle');

	button.addEventListener('click', function(e) {
	  let currentTheme = localStorage.getItem('theme');
		if (currentTheme == 'light') {
			localStorage.setItem('theme', 'dark');
    } else {
			localStorage.setItem('theme', 'light');
    }
		setTheme();
  });

}

function setTheme() {
	if (!localStorage.getItem('theme')) {
		localStorage.setItem('theme', 'dark');
		document.getElementById('content-body').classList.add('theme-base-0f-dark');
  } else {
	  let theme = localStorage.getItem('theme');
	  if (theme == 'light') {
		  document.getElementById('content-body').classList.remove('theme-base-0f-dark');
    }
	  else {
		  document.getElementById('content-body').classList.add('theme-base-0f-dark');
    }
	}
}