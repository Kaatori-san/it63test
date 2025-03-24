// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//product carousel
const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-button')];
const prevBtn = [...document.querySelectorAll('.prev-button')];

productContainers.forEach((item, i)=>{
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click', ()=>{
    item.scrollLeft += containerWidth;
  })

  prevBtn[i].addEventListener('click', ()=>{
    item.scrollLeft -= containerWidth;
  })
});