$('a[href^="#"]').click(function(){
	var mdi4 = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(mdi4).offset().top
	}, 'slow');
	return false;
});
