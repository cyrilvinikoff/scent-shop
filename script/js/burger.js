var burger = document.querySelector('.burger');
var close = document.querySelector('.close');
var nav = document.querySelector('nav');
var ul =  document.querySelector('nav ul');

burger.addEventListener('click', function(e) {
  burger.style.display = 'none';
  close.style.display = 'block';
  ul.className = 'appear';
  nav.className = 'nav-extend';
});

close.addEventListener('click', function(e) {
  burger.style.display = 'block';
  close.style.display = 'none';
  ul.classList.remove('appear');
  nav.className = 'reset-nav';
  if (window.innerWidth > 900) {
    burger.style.display = 'none';
  }
});


window.addEventListener('resize', function() {
  if (window.innerWidth > 900) {
    burger.style.display = 'none';
  }
  else if (close.style.display === 'block') {
    burger.style.display = 'none';
  }
  else {
    burger.style.display = 'block';
  }
});
