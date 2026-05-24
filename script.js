const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const joinBtn = document.getElementById('joinBtn');
const pricingSection = document.querySelector(".pricing-section");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});

joinBtn.addEventListener('click', ()  => {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
});