'use strict';

$(function(){ //плавный скролл к якорям
	$("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
		return false;
    });
});


$(function(){

	baguetteBox.run('.baguetteBox');

	$('#main_slider').carousel({interval: 4000});
	$('#slave_slider').carousel({interval: 4000});
});