window.onscroll = function () {topBar ()};
const navBar = document.querySelector('.navBar');

function topBar () {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0) {
      navBar.classList.add("scrolledFromTop");
   } else if (navBar.scrollTop == 0) {
      navBar.classList.remove("scrolledFromTop")
   }
   console.log(document.body.scrollTop);
}