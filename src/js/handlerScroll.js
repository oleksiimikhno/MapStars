export default function handlerScroll() {
  const information = document.querySelector('#information');
  const infoSlides = document.querySelector('.information-slides');
  
  function handlerScrolling(event) {
    const target = event.target;
    let scrollPercentage = 72 * target.scrollTop / (target.scrollHeight - target.clientHeight);

    infoSlides.style.transform = `translateY(-${scrollPercentage}%)`;
  }

  information.addEventListener('scroll', handlerScrolling);
}
