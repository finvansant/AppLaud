$(document).ready(function($) {  
  var myHeight = $(window).height();
  
   $('.wrapper-all').height(myHeight);
   
  	  //hides the first recording, which is just a blank canvas
  $('#recording').hide();
})//