
// Set 1
// #FFD7D2

// Set 2
// #ffc043

// Set 3
// #fa9269

// Set 4 
// #fff2d9
function setBackground () {
   const mainImg1 = document.querySelector(".mainimg1");
   const mainImg2 = document.querySelector(".mainimg2");
   const mainImgCont = document.querySelector(".mainImgCont");
   const number = getRandomInt(1, 4);
   console.log(number);

   switch (number) {
      case 1:
         mainImg1.src= "img\\mainImgs\\mainimgset1_1.svg";
         mainImg2.src= "img\\mainImgs\\mainimgset1_2.svg";
         mainImgCont.style.backgroundColor = "rgb(255, 215, 210)";
         break;
      case 2: {
         mainImg1.src= "img\\mainImgs\\mainimgset2_1.svg";
         mainImg2.src= "img\\mainImgs\\mainimgset2_2.svg";
         mainImgCont.style.backgroundColor = "rgb(255, 192, 67)";
         break;
      }
      case 3: {
         mainImg1.src= "img\\mainImgs\\mainimgset3_1.svg";
         mainImg2.src= "img\\mainImgs\\mainimgset3_2.svg";
         mainImgCont.style.backgroundColor = "rgb(250, 146, 105)";
         break;
      }
      case 4: {
         mainImg1.src= "img\\mainImgs\\mainimgset4_1.svg";
         mainImg2.src= "img\\mainImgs\\mainimgset4_2.svg";
         mainImgCont.style.backgroundColor = "rgb(255, 242, 217)";
         break;
      }
   }
};
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
setBackground();