(function ($) {
	"use strict";
  	$.extend( jQuery.easing,{
	    def: 'easeOutQuad',
	    easeInOutExpo: function (x, t, b, c, d) {
	        if (t==0) return b;
	        if (t==d) return b+c;
	        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	});

	$(document).on('click', '[data-scroll-to]', function (e) {
		e.preventDefault();
		var target = $($(this).attr('href')) || $('#'+$(this).attr('data-scroll-to'));
		target && $('html,body').animate({
          scrollTop: target.offset().top
        }, 600, 'easeInOutExpo');
	});
})(jQuery);

$(document).ready(function(){

    // Checkbox line-through

    $('.intro_list input').on('click', function(){
        if($(this).prop('checked')){
            $(this).parent().closest('label').addClass('line-through');
        }
        else {
            $(this).parent().closest('label').removeClass('line-through');
        }
    });

    $("input[type='checkbox'].intro_check").change(function(){
        var a = $("input[type='checkbox'].intro_check");
        if(a.length == a.filter(":checked").length){
        	$('.intro_list').hide();
        	$('.intro_congrats').show();
        	$('.intro_undo').show();
        	$('.intro_to').hide();
        }
    });

    // Modal show

    $('.intro_show').on('click', function () {
    	$('.show_bl').hide();
        $('.intro').fadeIn();
    });

    $('.resources_show').on('click', function () {
        $('.show_bl').hide();
        $('.resources').fadeIn();
    });

    $('.notification_show').on('click', function () {
        $('.show_bl').hide();
        $('.notification').fadeIn();
    });

    // Modal close

	$('.intro_top__close').on('click', function () {
		$('.intro').fadeOut();
        $('.resources').fadeOut();
        $('.notification').fadeOut();
    });

	// Undo

    $('.intro_undo').on('click', function () {
        $('.intro_list').show();
        $('.intro_congrats').hide();
        $(this).hide();
        $('.intro_to').show();
        $('.intro_list input').prop('checked', false);
        $('.intro_list input').parent().closest('label').removeClass('line-through');
    });
});