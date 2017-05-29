var burger = document.querySelector('.burger');
var close = document.querySelector('.close');
var nav = document.querySelector('nav');
var ul =  document.querySelector('nav ul');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  burger.style.display = 'none';
  close.style.display = 'block';
  ul.style.display = 'flex';
  nav.className = 'nav-extend';
});

close.addEventListener('click', function(e) {
  e.preventDefault();
  burger.style.display = 'block';
  close.style.display = 'none';
  ul.style.display = 'none';
  nav.classList.remove('nav-extend');
});
