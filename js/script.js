//Functionality for FILTER BUTTONS
$(document).ready( function () {
      $('#navButton').click(function(){
        $('.menu').slideToggle('slow');
      togglemenu();
    });
  
  $('.tabs').find('a').click( function (e) {
    var theFilter = $(this).data('filter');
    
    e.preventDefault();
    $('.tabs').find('a').removeClass('active');
    $(this).addClass('active');
    
   $('.portfolio').find('li').show();
   if(theFilter != ".group-3")
   {
      $('.portfolio').find('li').not(theFilter).hide();
   }
  });
});


function togglemenu() {
var div = document.getElementById("navButton");
  
if (div.className == "closed") {open();}
else{close();}
}

function open() {
document.getElementById("navButton").innerHTML="- Close -";
document.getElementById("navButton").className = "open";
}

function close() {
document.getElementById("navButton").innerHTML="- Menu -";
document.getElementById("navButton").className="closed";
}

//background toggle function



 
