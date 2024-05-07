const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// when we click icon we can use search input and we call this function 'handler'

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // in this case we can set if sth sets as 'focused' do~
  searchInputEl.setAttribute('placeholder', 'Search');
  // attribute is for html element, placeholder for input element when it's empty, next thing for the letter would be there
}); // until here we have made it happen so it should disappear again

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  // remove 'focused'
  searchInputEl.setAttribute('placeholder', '');
  // and don't show anything on input part
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022