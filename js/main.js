$(document).ready(function(){

//Transparence navbar

var navEl = document.getElementById("mainNav");
var opacity = 0;
var dernierScroll = 0;
$(window).scroll(function() {
  var compteurScroll = $(this).scrollTop();
  	if (compteurScroll == 0) {
    	navEl.style.backgroundColor = "rgba(69, 89, 96, 0)";
			navEl.style.borderBottom = "1px solid rgba(0, 0, 0, 0)";
    	opacity = 0;
  	}
  	else if (opacity < 1 && compteurScroll > dernierScroll){
    	navEl.style.backgroundColor = "rgba(69, 89, 96, "+ (opacity += 0.1) + ")";
			navEl.style.borderBottom = "1px solid rgba(0, 0, 0, "+ (opacity += 0.1) +")";
    	opacity += 0.1;
  	}
		else if (compteurScroll < 100 && compteurScroll < dernierScroll){
			navEl.style.backgroundColor = "rgba(69, 89, 96, "+ (opacity -= 0.1) + ")";
			navEl.style.borderBottom = "1px solid rgba(0, 0, 0, "+ (opacity -= 0.1) +")";
    	opacity -= 0.1;
		}
  	dernierScroll = compteurScroll;

});

 $('nav#mainNav').midnight();
});
