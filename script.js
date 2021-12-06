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
const wrapperPapper = document.querySelector(".wrapperPapperInputRestaurant");

function attachRestSearch () {
   const inputPosition = inputRestaurant.getBoundingClientRect();
   const dostarczTerazBtn = document.querySelector('.dostarczTeraz');
   const dostarczTerazBtnPosition = dostarczTerazBtn.getBoundingClientRect();
   if (inputPosition.top <= 26 && dostarczTerazBtnPosition.top < 26) {
      inputRestaurant.classList.add("inputResaurantScrollled");
      inpRest.style.backgroundColor = "var(--grey)";
      
      wrapperPapper.style.backgroundColor = "var(--grey)";
   } else {
      inputRestaurant.classList.remove("inputResaurantScrollled");
      inpRest.style.backgroundColor = "white";
      wrapperPapper.style.backgroundColor = "white";
   }
}
function getPos(el) {
   // yay readability
   for (var lx=0, ly=0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);  
   return lx;
}

const clickToDrop = document.querySelector(".clickToDrop");
const dropDownWrapper = document.querySelector(".dropDownWrapper")
clickToDrop.addEventListener("click", function () {
   dropDownWrapper.classList.toggle("showDrop")
})


document.addEventListener('click', function(event) {
   const dropDownMenu = document.querySelector(".dropDownMenu");
   const isClickInsideElement = dropDownMenu.contains(event.target);
   if (!isClickInsideElement) {
      dropDownWrapper.classList.remove('showDrop');
      
   }
})
;