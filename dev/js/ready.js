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
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	 	var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);

		return false;
	})
})


$(function(){
	baguetteBox.run('.baguetteBox');

	$('#main_slider').carousel({interval: 4000});
	$('#slave_slider_1').carousel({interval: 4000});
	$('#slave_slider_2').carousel({interval: 4000});
	$('#slave_slider_3').carousel({interval: 4000});


	$('#about').viewportChecker({ 
		offset: 0,
		callbackFunction: function(el) {
			el.removeClass('opacity')
		}
	});

	$('.img_txt').viewportChecker({ 
		offset: 300,
		callbackFunction: function(el) {
			el.removeClass('opacity')
		}
	});
});



/*  Parallax  */
$(function(){
	$('.concept').each(function(){
		var obj = $(this),
			img1_offset = obj.find('.concept__img:first-of-type').offset().top,
			img2_offset = obj.find('.concept__img:last-of-type').offset().top;

		$(window).scroll(function(e){
			parallax(obj, img1_offset, img2_offset);
		});
	});
})
function parallax(obj, img1_offset, img2_offset){
	var scrolltop = $(window).scrollTop();

	scrolltop += 300;

	
	obj.find('.concept__img:first-of-type').css({'transform': 'translate3d(0, '+(img1_offset - scrolltop)/8+'px, 0)'});	
	obj.find('.concept__img:last-of-type').css({'transform': 'translate3d(0, '+(img2_offset - scrolltop)/5+'px, 0)'});	
	
		
}
/* Parallax 2 */
$(function(){
	var obj = $('.apartaments_back'),
		img1_offset = obj.offset().top,
		scrolltop;

	$(window).scroll(function(e){
		scrolltop = $(window).scrollTop();
		obj.css({'transform': 'translate3d(0, '+(-img1_offset + scrolltop)/6.5+'px, 0)'});
	});
});
/*  /Parallax  */


/*  Scroll  */
// (function($){
//		$(window).on("load",function(){
//		    $(".img_txt__imgs").mCustomScrollbar({
//		    	theme:"dark"
//		    });
//		});
// })(jQuery);
/*  /Scroll  */




/*  Random gallery  */
(function($){
    $.fn.cascadeMe = function() {
        return this.each(function() {            
            var $this = $(this);
            var obj = $(this).children('span');
            var arr = $.makeArray(obj);           
            arr.sort(function() {return 0.5 - Math.random()});           
            $this.empty().show();
            arr.push("");
            
            var delay = 150;
            
            $.each(arr, function(i, val) {
                $this.append(val);
                $this.children('span').hide().fadeIn(500).delay(delay * i);
            });
        });
    };
})(jQuery);

$('.img_txt__imgs').cascadeMe();
/*  /Random gallery  */





