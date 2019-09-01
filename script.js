function dateMod() {
  var string = document.lastModified;
  var x = document.getElementsByClassName("date-mod");
  x[0].innerHTML = string;
}

// Debounce for scroll to reduce the number of Events

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(slideImage => {});
}

window.addEventListener("scroll", debounce(checkSlide));
