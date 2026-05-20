const homeOption = document.getElementById('home');
const homeSection = document.getElementById('home-section');

homeOption.addEventListener('click', () => {
    homeSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
    });
});

const memberOption = document.getElementById('memberOption');
const memberOptionSection = document.getElementById('membership-options-section');

memberOption.addEventListener('click', () => {
    memberOptionSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
    });
});

const aboutUs = document.getElementById('aboutUs');
const aboutUsSection = document.getElementById('about-us-section');

aboutUs.addEventListener('click', () => {
    aboutUsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

const signUpBtn = document.getElementById('joinBtn');
const pricingSection = document.getElementById('pricingSection');

signUpBtn.addEventListener('click', () => {
    pricingSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
    });
});

const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    container.addEventListener('click', () => {
        containers.forEach(item => {
            item.classList.remove('active');
        });
        container.classList.add('active');
    });
});