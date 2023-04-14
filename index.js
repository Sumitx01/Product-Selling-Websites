
const links = document.querySelector('.item1').querySelectorAll('a');
links.forEach(link => {
  // Check if the link's URL matches the current page's URL
  if (link.href === window.location.href) {
    link.classList.add('active');
  }

  link.addEventListener('click', function(event) { 
    // Prevent the default link behavior
    event.preventDefault();

    // Remove the "active" class from all links
    links.forEach(otherLink => {
        otherLink.classList.remove('active'); 
    });

    // Add the "active" class to the clicked link
    this.classList.add('active');

    // Get the URL of the clicked link
    const href = this.getAttribute('href');

    // Wait for the animation to finish, then follow the link
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
  });

  
const links1 = document.querySelector('.hamburger-links').querySelectorAll('a');
links1.forEach(link1 => {
  // Check if the link's URL matches the current page's URL
  if (link1.href === window.location.href) {
    link1.classList.add('active');
  }

  link1.addEventListener('click', function(event) { 
    // Prevent the default link behavior
    event.preventDefault();

    // Remove the "active" class from all links
    links1.forEach(otherLink1 => {
        otherLink1.classList.remove('active'); 
    });

    // Add the "active" class to the clicked link
    this.classList.add('active');

    // Get the URL of the clicked link
    const href = this.getAttribute('href');

    // Wait for the animation to finish, then follow the link
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
  });
var slide1 = 1;
setInterval(() => {
  document.getElementById('radio'+slide1+'-1').checked = true;
  slide1++;
  if(slide1 > 4){
    slide1 = 1;
  }
}, 5000);

var slide2 = 1;
setInterval(() => {
  document.getElementById('radio'+slide2+'-2').checked = true;
  slide2++;
  if(slide2 > 4){
    slide2 = 1;
  }
}, 5000);

var slide3 = 1;
setInterval(() => {
  document.getElementById('radio'+slide3+'-3').checked = true;
  slide3++;
  if(slide3 > 4){
    slide3 = 1;
  }
}, 5000);

var slide4 = 1;
setInterval(() => {
  document.getElementById('radio'+slide4+'-4').checked = true;
  slide4++;
  if(slide4 > 4){
    slide4 = 1;
  }
}, 5000);

  var MainImg = document.getElementById("mainImg");
  var SmallImg = document.getElementsByClassName("smallImg");
  for (var i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = function(){
      MainImg.src = this.src;
    }
  }

  function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.hamburger-links').classList.toggle('active')
  }

 