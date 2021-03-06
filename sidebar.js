const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".navBtn");
const wrapper = document.querySelector(".wrapper");
const dimmer = document.querySelector(".dimmer");
const body = document.querySelector("body");
navBtn.addEventListener('click', mobileMenu);


function mobileMenu () {
   sidebar.classList.add('active');
   body.classList.add('active');
   dimmer.classList.add('active');
}
document.addEventListener('click', function(event) {
   const isClickInsideElement = navBtn.contains(event.target);
   const isClick2 = sidebar.contains(event.target);
   if ((!isClickInsideElement) && (!isClick2)) {
      sidebar.classList.remove('active');
      body.classList.remove('active');
      dimmer.classList.remove('active');
   }
});