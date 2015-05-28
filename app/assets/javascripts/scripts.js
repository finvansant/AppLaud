$(document).ready(function($) {  
  var myHeight = $(window).height();
  
   $('aside').height(myHeight);
   
  	  //hides the first recording, which is just a blank canvas
  $('#recording').hide();
})//