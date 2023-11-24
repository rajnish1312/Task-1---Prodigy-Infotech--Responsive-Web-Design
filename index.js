window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
 
  if (window.scrollY > 100) {
     navbar.style.backgroundColor = '#ff9800';
  } else {
     navbar.style.backgroundColor = '#333';
  }
 });

 function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('scroll', function () {
  var backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});