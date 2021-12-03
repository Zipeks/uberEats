window.onscroll = function () {checkscroll ()};
const navBar = document.querySelector('.navBar');


function checkscroll () {
   topBar();
   attachRestSearch();
}
function topBar () {
   if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && document.body.clientWidth >= 1024) {
      navBar.classList.add("scrolledFromTop");
      const left =getPos(navBar)+300
      inputRestaurant.style.left = `${left}px`;
      
   } else if (navBar.scrollTop == 0) {
      navBar.classList.remove("scrolledFromTop")
   }
}
const inputRestaurant = document.querySelector(".wrapperInputRestaurant"); 
const inpRest = document.querySelector(".inputRestaurant");


//przy wężyszych rozdzielczościach przeskok jest za wcześnie
//ale w czystym js ciężko to chyba inaczej zrobić z tego co znalazłem
function attachRestSearch () {
   const inputPosition = inputRestaurant.getBoundingClientRect();
   const dostarczTerazBtn = document.querySelector('.dostarczTeraz');
   const dostarczTerazBtnPosition = dostarczTerazBtn.getBoundingClientRect();
   console.log(dostarczTerazBtnPosition.top);
   if (inputPosition.top <= 26 && dostarczTerazBtnPosition.top < 26) {
      inputRestaurant.classList.add("inputResaurantScrollled");
      inpRest.classList.add("grey");
   } else {
      inputRestaurant.classList.remove("inputResaurantScrollled");
      inpRest.classList.remove("grey");
   }
}
function getPos(el) {
   // yay readability
   for (var lx=0, ly=0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);  
   return lx;
}