var openSearch = document.querySelector('nav ul li.search-menu');
var closeSearch = document.querySelector ('.search img');
var div = document.querySelector('.search');

openSearch.addEventListener('click', function() {
  disableScroll();
  div.style.display = 'flex';
  div.style.opacity = 1;
});
closeSearch.addEventListener('click', function() {
  enableScroll();
  div.style.display = 'none';
  div.style.opacity = 0;
});
