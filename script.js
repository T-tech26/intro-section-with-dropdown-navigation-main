// Accessing all the needed elements
const navIcon = document.querySelector('.nav-icon');
const navCloseIcon = document.querySelector('.nav-close-icon');
const featureLi = document.querySelector('.features-li');
const companyLi = document.querySelector('.company-li');
const feature = document.querySelector('.features');
const company = document.querySelector('.company');
const featureArrow = document.querySelector('.features-arrow');
const companyArrow = document.querySelector('.company-arrow');
const parentNavBar = document.getElementById('nav-menu');
const navBar = document.getElementById('nav');


featureLi.addEventListener('click', () => {
  feature.classList.toggle('show-feature') ? featureArrow.setAttribute('src', './images/icon-arrow-up.svg') : featureArrow.setAttribute('src', './images/icon-arrow-down.svg');
})

companyLi.addEventListener('click', () => {
  company.classList.toggle('show-company') ? companyArrow.setAttribute('src', './images/icon-arrow-up.svg') : companyArrow.setAttribute('src', './images/icon-arrow-down.svg');
})

navIcon.addEventListener('click', () => {
  navBar.classList.add('show-nav');
  parentNavBar.classList.add('show-parent');
})

navCloseIcon.addEventListener('click', () => {
  navBar.classList.add('hide-nav');
  parentNavBar.classList.add('hide-parent');

  /* This time out function is set to remove all the added class
     This is because the classes can't be toggle so i used this to solve the problem
  */
  setTimeout(() => {
    navBar.classList.remove('hide-nav');
    parentNavBar.classList.remove('hide-parent');
    navBar.classList.remove('hide-nav');
    parentNavBar.classList.remove('show-parent');
  },1500)
})