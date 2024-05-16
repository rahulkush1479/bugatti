const element = document.querySelector("#con");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});
///////////////////////////////////////////////////////////////////////////////

var cursor = document.getElementById('curser');
document.addEventListener('mousemove', function (e) {
    var X = e.clientX;
    var y = e.clientY;
    cursor.style.left = X + "px";
    cursor.style.top = y + "px";

});

///////////////////////////////////////////////////////////////////////////////
$(window).scroll(function(){
  if ($(this).scrollRight() > 50) {
     $('#dynamic').addClass('newClass');
  } else {
     $('#dynamic').removeClass('newClass');
  }
});


///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
