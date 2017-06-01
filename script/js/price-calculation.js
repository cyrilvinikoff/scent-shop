var price = document.querySelector('.scent-price');
var selectBox = document.getElementById("quantity");

selectBox.addEventListener('change', function() {
  for (var i = 0; i < selectBox.length; i++) {
    if (selectBox[i].selected) {
      price.innerHTML = selectBox[i].value * 100 + ' €';
    }
  }
});
