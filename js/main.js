$(function() {
	$('.slider_shell, .news_slider-shell').slick({
		nextArrow: '<button type="button" class="slick-button slick-next"></button>',
		prevArrow: '<button type="button" class="slick-button slick-pre"></button>',
		infinite: false
	});

	$('select').styler();

	$('.header_button-menu').on('click', function(){
		$('.menu ul').slideToggle();
	})

});