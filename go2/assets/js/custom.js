$(document).ready(function() {
	$('.hssb_stickybar_toggle').click(function(){
		$('body').toggleClass('stickybar_close');
	});

	$('.dp_add_cart a,.mj_btn').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
});