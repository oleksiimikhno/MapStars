export default function handlerClick() {
  function hendlerClickGetStart(event) {
    const target = event.target;

    const packages = document.querySelector('#packages');
    const contact = document.querySelector('#contact');
    if (target.classList.contains('get-started')) {
      scrollToElement(packages);
    }

    if (target.classList.contains('button-down')) {
      scrollToElement(contact);
    }
  }

  function scrollToElement(element) {
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  document.addEventListener('click', hendlerClickGetStart);
}