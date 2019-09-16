$(function(){
	var navbar = $('.navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 80){
            navbar.removeClass('navbar-scroll');
		} else {
            navbar.addClass('navbar-scroll');
		}
	});
});