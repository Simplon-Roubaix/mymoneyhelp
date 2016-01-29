// animation scroll navbar
$('a[href^="#"]').click(function(){
	var mdi4 = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(mdi4).offset().top
	}, 'slow');
	return false;
});

//Transparence navbar

var opacity = 0.5;
var lastScrollTop = 0;
$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0)
        $('#mainNav').css('opacity','0.5');

    if (opacity < 1 && (st > lastScrollTop)){
       $('#mainNav').css('opacity','+=0.1');
       opacity += 0,1;
    }
    else if(opacity > 0.5)
    {
       $('#mainNav').css('opacity','-=0.1');
        opacity -= 0.1;
    }
    lastScrollTop = st;
});
