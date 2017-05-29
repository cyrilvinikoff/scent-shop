var number = document.querySelector('nav ul li span');
var shop = document.querySelector('.shop');
var i = number.textContent;

shop.addEventListener('click', function() {
  i++;
  number.textContent = i;
});
