var main = function () {
    var menuOpen = 0;
    $('.icon-menu').click(function () {
        if (menuOpen === 0) {
            $('.menu').animate({ left: '0px' }, 200);
            $('body').animate({ left: '285px' }, 200);
            menuOpen = 1;
        }
        else if (menuOpen === 1) {
            $('.menu').animate({ left: '-285px' }, 200);
            $('body').animate({ left: '0px' }, 200);
            menuOpen = 0;
        }
    });

    $('.icon-close').click(function () {
        $('.menu').animate({ left: '-285px' }, 200);
        $('body').animate({ left: '0px' }, 200);
        menuOpen = 0;
    });
	
	$('.menu li').mouseenter(function(){
		$(this).animate({ letterSpacing: '5px' }, 200);
	});
	
	$('.menu li').mouseleave(function(){
	    $(this).animate({ letterSpacing: '0px' }, 200);
	});
	
};

$(document).ready(main);