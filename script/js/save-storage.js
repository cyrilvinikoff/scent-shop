var number = document.querySelector('nav ul li span');

var nbItems = localStorage.getItem('count');
localStorage.setItem('count', nbItems);
number.textContent = nbItems;
