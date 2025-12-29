function toggleMenu() {
  const menu = document.querySelector("#mobile-menu");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("hidden");
  // icon.classList.toggle("open"); // If we were using the old icon style
}

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const mobileThemeToggleBtn = document.getElementById('theme-toggle-mobile');

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
    if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '☀️';
} else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
    if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '🌙';
}

function toggleTheme() {
    // Toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '☀️';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '🌙';
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '🌙';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            if(mobileThemeToggleBtn) mobileThemeToggleBtn.innerHTML = '☀️';
        }
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);
if(mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);
