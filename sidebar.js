const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".navBtn");
const wrapper = document.querySelector(".wrapper");
navBtn.addEventListener('click', mobileMenu);


function mobileMenu () {
   sidebar.classList.add('active');
   wrapper.classList.add('active');
}
document.addEventListener('click', function(event) {
   const isClickInsideElement = navBtn.contains(event.target);
   const isClick2 = sidebar.contains(event.target);
   if ((!isClickInsideElement) && (!isClick2)) {
      sidebar.classList.remove('active');
      wrapper.classList.remove('active');
   }
});