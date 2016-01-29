// animation scroll navbar
$('a[href^="#"]').click(function(){
	var mdi4 = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(mdi4).offset().top
	}, 'slow');
	return false;
});

//Transparence navbar

var opacity = 0;
var lastScrollTop = 0;
$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0)
        $('#mainNav').css('background-color','rgba(69, 89, 96, opacity');

    if (opacity < 1 && (st > lastScrollTop)){
			 opacity += 0,1;
       $('#mainNav').css('opacity','rgba(69, 89, 96, opacity)';
    }
    else if(opacity > 0.5)
    {
			 opacity -= 0.1;
       $('#mainNav').css('opacity','(69, 89, 96, opacity)');
    }
    lastScrollTop = st;
});
