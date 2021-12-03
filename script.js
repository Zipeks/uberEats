window.onscroll = function () {checkscroll ()};
const navBar = document.querySelector('.navBar');

function checkscroll () {
   topBar();
   attachRestSearch();
}
function topBar () {
   if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && document.body.clientWidth >= 1024) {
      navBar.classList.add("scrolledFromTop");
   } else if (navBar.scrollTop == 0) {
      navBar.classList.remove("scrolledFromTop")
   }
}
const inputRestaurant = document.querySelector(".wrapperInputRestaurant"); 
const inpRest = document.querySelector(".inputRestaurant");


//przy wężyszych rozdzielczościach przeskok jest za wcześnie
//ale w czystym js ciężko to chyba inaczej zrobić z tego co znalazłem
function attachRestSearch () {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      inputRestaurant.classList.add("inputResaurantScrollled");
      inpRest.classList.add("grey");
   } else if (inputRestaurant.scrollTop <=500) {
      inputRestaurant.classList.remove("inputResaurantScrollled")
      inpRest.classList.remove("grey")
   }
}
