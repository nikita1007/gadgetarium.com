document.addEventListener('DOMContentLoaded', function () {
  
  function MainSliderSwipes() { 
    const MainSliderWrap    = document.querySelector(".product-slider__slides"),
          MainSliderArrows  = document.querySelector(".product-slider__arrows"),
          MainSliderButtons = document.querySelector(".product-slider__buttons");
    
    let MainSliderOffset = 1;
    let MainSlidesCount = 0;

    for (const slide of MainSliderWrap.children) {
      if (slide.classList.contains('product-slider__slide')) {
        MainSlidesCount++;
      } 
    }

    function MainSliderSwipeLeft() {
      MainSliderArrows.children[0].addEventListener('click', () => {
        if (MainSliderOffset === 1) {
          MainSliderButtons.children[MainSlidesCount-1].classList.add('product-slider__button--active');
          MainSliderButtons.children[0].classList.remove('product-slider__button--active');
  
          MainSliderOffset = MainSlidesCount;
          
          MainSliderWrap.children[1].classList.remove('product-slider__slide--active');
          MainSliderWrap.children[MainSlidesCount].classList.add('product-slider__slide--active');
        } else {
          MainSliderOffset--;
          
          MainSliderButtons.children[MainSliderOffset-1].classList.add('product-slider__button--active');
          MainSliderButtons.children[MainSliderOffset].classList.remove('product-slider__button--active');
  
          MainSliderWrap.children[MainSliderOffset+1].classList.remove('product-slider__slide--active');
          MainSliderWrap.children[MainSliderOffset].classList.add('product-slider__slide--active');
        }
      });
    }
    function MainSliderSwipeRight() {
      MainSliderArrows.children[1].addEventListener('click', () => {
        if (MainSliderOffset === MainSlidesCount) {
          MainSliderButtons.children[MainSlidesCount-1].classList.remove('product-slider__button--active');
          MainSliderButtons.children[0].classList.add('product-slider__button--active');
  
          MainSliderWrap.children[MainSlidesCount].classList.remove('product-slider__slide--active');
          MainSliderOffset = 1;
          MainSliderWrap.children[MainSliderOffset].classList.add('product-slider__slide--active');
        } else {
          MainSliderButtons.children[MainSliderOffset-1].classList.remove('product-slider__button--active');
          MainSliderButtons.children[MainSliderOffset].classList.add('product-slider__button--active');
          
          MainSliderOffset++;
  
          MainSliderWrap.children[MainSliderOffset-1].classList.remove('product-slider__slide--active');
          MainSliderWrap.children[MainSliderOffset].classList.add('product-slider__slide--active');
        }
      });
    }
    function MainSliderSwipeButtons() {
      for (let i = 0; i < MainSliderButtons.children.length; i++) {
        MainSliderButtons.children[i].setAttribute('data-offset', i);
      }
      for (const button of MainSliderButtons.children) {
        button.addEventListener('click', () => {
          MainSliderWrap.children[MainSliderOffset].classList.remove('product-slider__slide--active');
          MainSliderButtons.children[MainSliderOffset-1].classList.remove('product-slider__button--active');
          MainSliderOffset = (Number(button.getAttribute("data-offset"))) + 1;
          MainSliderWrap.children[MainSliderOffset].classList.add('product-slider__slide--active');
          MainSliderButtons.children[MainSliderOffset-1].classList.add('product-slider__button--active');
        });
      }
    }

    MainSliderSwipeLeft();
    MainSliderSwipeRight();
    MainSliderSwipeButtons();

  }
  MainSliderSwipes();

});