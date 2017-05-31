var basket = document.querySelector('.basket');
var basketDetails = document.querySelector('.basket-details');

  basket.addEventListener('mouseover', function() {
    basketDetails.style.opacity = 1;
    basketDetails.style.display = 'block';
  });
  basketDetails.addEventListener('mouseover', function() {
    basketDetails.style.opacity = 1;
    basketDetails.style.display = 'block';
  });
  basket.addEventListener('mouseout', function() {
    basketDetails.style.opacity = 0;
    basketDetails.style.display = 'none';
  });
  basketDetails.addEventListener('mouseout', function() {
    basketDetails.style.opacity = 0;
    basketDetails.style.display = 'none';
  });
