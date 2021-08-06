const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const sliderContainer = document.querySelector('.slider-container');
const slide = document.querySelectorAll('.slide');

let indexState = 0;
slide.forEach((ele, index) => {
  ele.style.left = `${100 * index}%`;
});

nextBtn.addEventListener('click', function () {
  indexState++;

  if (indexState === slide.length) {
    indexState = 0;
  }
  slide.forEach((ele, index) => {
    ele.style.transform = `translateX(${-100 * indexState}%)`;
  });
});

prevBtn.addEventListener('click', function () {
  indexState--;

  if (indexState < 0) {
    indexState = slide.length - 1;
  }

  slide.forEach((ele, index) => {
    ele.style.transform = `translateX(${-100 * indexState}%)`;
  });
});
