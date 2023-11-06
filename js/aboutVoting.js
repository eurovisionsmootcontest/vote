let aboutOpen = false;

function aboutVoting() {
    const abouttab = document.getElementById('about-tab');
    if (aboutOpen) {
        abouttab.style.opacity = "1";
        abouttab.classList.add('active');
        aboutOpen = false;
    } else {
        abouttab.style.opacity = "0";
        abouttab.classList.remove('active');
        aboutOpen = true;
    }
}

document.addEventListener('click', function(event) {
    if (aboutOpen && event.target !== aboutTab && !aboutTab.contains(event.target)) {
        aboutTab.style.opacity = "0";
        aboutOpen = false;
    }
});

const closeAboutTab = document.getElementById('close-about-tab');
const abouttab = document.getElementById('about-tab');
closeAboutTab.addEventListener('click', function() {
    abouttab.style.opacity = "0";
    abouttab.classList.remove('active');
    aboutOpen = true;
});


aboutVoting();