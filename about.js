
//dark mode toggle
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    darkmode = 'inactive';
}

// ✅ Fix: make sure only "active" enables dark mode
if (darkmode === 'active') {
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
