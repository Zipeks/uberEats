const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".navBtn");
const wrapper = document.querySelector(".wrapper");
const dimmer = document.querySelector(".dimmer");
const body = document.querySelector("body");
navBtn.addEventListener('click', mobileMenu);


function mobileMenu () {
   sidebar.classList.add('active');
   wrapper.classList.add('active');
   body.classList.add('active');
   dimmer.show();
}
document.addEventListener('click', function(event) {
   const isClickInsideElement = navBtn.contains(event.target);
   const isClick2 = sidebar.contains(event.target);
   if ((!isClickInsideElement) && (!isClick2)) {
      sidebar.classList.remove('active');
      wrapper.classList.remove('active');
      body.classList.remove('active');
      dimmer.hide();
   }
});