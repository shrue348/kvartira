'use strict';

$(function(){ //плавный скролл к якорям
	$("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 50}, 900);

		return false;
    });
});

$(function(){
	$('a[data-target="#slave_slider_1"]').on('click', function (e) {
	 	var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-200}, 900);

		return true;
	})
})


$(function(){
	baguetteBox.run('.baguetteBox');

	$('#main_slider').carousel({interval: 4000});
	$('#slave_slider_1').carousel({interval: 4000});
	$('#slave_slider_2').carousel({interval: 4000});
	$('#slave_slider_3').carousel({interval: 4000});
	$('#slave_slider_4').carousel({interval: false});


	$('section.opacity').viewportChecker({ 
		offset: 400,
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



/*  Random gallery  */
(function($){ //сортировка слайдов рандомно
    $.fn.cascadeMe = function() {
        return this.each(function() {            
            var $this = $(this);
            var obj = $(this).children('a');
            var arr = $.makeArray(obj);           
            arr.sort(function() {return 0.5 - Math.random()});

            obj.removeClass('fadeIn')       
            $this.empty().show();
            arr.push("");
            
            var delay = 150;
         
            $.each(arr, function(i, val) {
                $this.append(val);
            });

           	bla();
        });
    };
})(jQuery);

function bla(){ // появление 9 слайдов по порядку
	var delay = 100;
	var a = 1;
	for (var i = 0; i < 9; i++) {
		setTimeout(function() { 
			$('.img_txt__imgs a:nth-child('+a+')').addClass('fadeIn');
			console.log(a)
			a++
		}, delay * i);
	}
}

$(function(){
	bla(); // первое появление слайдов

	var timerId = setInterval(function() { // запуск цикла сортировки слайдов
	  $('.img_txt__imgs').cascadeMe();
	}, 3000);
})
/*  /Random gallery  */



/* Open slider in modal */

$(function(){
	$('.build_item').on('click', function(){
		var obj = $(this),
			gal_items = obj.find('.to_slider').html();

		$('#modal_slider .carousel-inner').html(gal_items)
		$('#modal_slider .carousel-inner .item:first').addClass('active');
		$('#modal_slider').carousel();
		$('#modal_gal').modal('show');
	});

	$('#modal_gal').on('hidden.bs.modal', function (e) {
		$('#modal_slider .carousel-inner').empty();
	})
})



$(function(){
	$(".build_items").mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoExpandScrollbar: !0,
        advanced: {
            autoExpandHorizontalScroll: !0
        }
    })
});

