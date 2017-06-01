var remove = document.querySelectorAll('.details img');
var item = document.querySelectorAll('.basket-product');
var total = document.querySelectorAll('.pay span');

for (let i = 0; i < item.length; i++) {
  remove[i].addEventListener('click', function() {
    item[i].style.display = 'none';
    total[i].textContent = 'Total : 100€';
  });
}
