var number = document.querySelector('nav ul li span');
var shop = document.querySelector('.shop');

shop.addEventListener('click', function() {
  var nbItems = localStorage.getItem('count');
  nbItems++;
  
  localStorage.setItem('count', nbItems);
  number.textContent = nbItems;
});
