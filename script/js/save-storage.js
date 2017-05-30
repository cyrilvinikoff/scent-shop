var number = document.querySelector('nav ul li span');

var nbItems = localStorage.getItem('count');
if (nbItems != null) {
  nbItems = parseInt(nbItems);
}
else {
  nbItems = 0;
}

localStorage.setItem('count', nbItems);
number.textContent = nbItems;
