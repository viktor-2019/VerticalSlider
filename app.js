const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
downBtn.addEventListener('click', () => chandeSlide('down'));
upBtn.addEventListener('click', () => chandeSlide('up'));

function chandeSlide(dir) {
  if (dir === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }
  if (dir === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  const h = container.clientHeight; 
  sidebar.style.transform = `translateY(${activeSlideIndex * h}px)`
  mainSlide.style.transform = `translateY(-${activeSlideIndex * h}px)`
}

