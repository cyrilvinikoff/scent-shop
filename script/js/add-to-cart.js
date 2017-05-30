var number = document.querySelector('nav ul li span');
var shop = document.querySelector('.shop');

shop.addEventListener('click', function() {
  var nbItems = localStorage.getItem('count');
  if (nbItems != null) {
    nbItems = parseInt(nbItems);
  }
  else {
    nbItems = 0;
  }

  nbItems++;

  localStorage.setItem('count', nbItems);
  number.textContent = nbItems;
  // number.style.opacity = 1;
});
