
// TOP SLIDER, onclick scrolls to the left or right 

let topButtonRight = document.getElementById('top__slider__right');
let topButtonLeft = document.getElementById('top__slider__left');

topButtonLeft.addEventListener('click', function() {
  document.getElementById('top__slider__wrapper').scrollLeft -= 180
})

topButtonRight.addEventListener('click', function() {
  document.getElementById('top__slider__wrapper').scrollLeft += 180
})

// BOTTOM SLIDER, onclick scrolls to the left or right 

let bottomButtonRight = document.getElementById('bottom__slider__right');
let bottomButtonLeft = document.getElementById('bottom__slider__left');

bottomButtonLeft.addEventListener('click', function() {
  document.getElementById('bottom__slider__wrapper').scrollLeft -= 180
})

bottomButtonRight.addEventListener('click', function() {
  document.getElementById('bottom__slider__wrapper').scrollLeft += 180
})



// Passing navbar categories to html

const navBarCategories = {
  category: "SHOP BY CATEGORY",
  brand: "SHOP BY BRAND",
  collection: "SHOP BY COLLECTION",
  about: "ABOUT KOBIRD",
  popup: "POP - UP SHOP"
}

const category = document.getElementById('category');
const brand = document.getElementById('brand');
const collection = document.getElementById('collection');
const about = document.getElementById('about');
const popup = document.getElementById('popup');

category.innerHTML = navBarCategories.category;
brand.innerHTML = navBarCategories.brand;
collection.innerHTML = navBarCategories.collection;
about.innerHTML = navBarCategories.about;
popup.innerHTML = navBarCategories.popup;