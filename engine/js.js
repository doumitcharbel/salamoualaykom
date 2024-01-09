"use strict";

// clos menu
$(document).ready(function() {
$('.navbar-collapse ul li:not(.dropdown) a').click(function() {
    $('.navbar-toggle:visible').click();
});
$('.dropdown').on('mouseenter mouseleave click tap', function() {
  $(this).toggleClass("open");
});
});
$(document).ready(function(e) {
	 $(".pi").hover(function(e){
		 
		 var e=$(this);
		 var h=e.find(".project-img").height();
		 
		 var p=(h-27)/2;
		 e.find(".project-layer").css("padding-top",p);
		 e.find(".project-layer").fadeTo(150,1);
		 e.find(".project-title").css("background-color","rgba(102,86,72,0)");
		  
	  },function(e){
		 var e=$(this);
		 e.find(".project-layer").fadeTo(150,0,function(){e.find(".project-layer").css("padding-top",0);});
		 e.find(".project-title").css("background-color","rgba(102,86,72,0.85)");
      });
});

$(document).ready(function() {
	
	$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
});
$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
    
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});
           $('#carousel-example-generic').carousel({
    interval: 3000
});
});

