$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('#ax-mercado').click(function(){
	$('.ax-itemmod').addClass('animated fadeInRight');
	$('.ax-item-mod').addClass ('animated fadeInRight');
	$('.ax-itemmod').addClass('ver');
	$('.ax-item-mod').addClass('ver');
	$('#ax-mod-img').removeClass();
	$('#ax-mod-img').addClass('ax-mod-img2 animated bounceInUp');
	$('#ax-mod-compl2').removeClass();
	$('#ax-mod-compl2').addClass('col-md-9 ax-md animated fadeIn');
	$('#ax-mod-compl3').addClass('ver animated fadeIn');
	
  return false;

});

//
//$('#ax-mod-img').click(function(){
//	$('#ax-mod-img').removeClass();
//	$('#ax-mod-compl4').addClass('ocultar');
//	
//	$('#ax-mod-compl2').removeClass();
//	$('#ax-mod-compl2').addClass('col-md-10 ax-md-2');
//	
//	$('#ax-itemmod').removeClass();
//	$('#ax-itemmod').addClass('ocultar');
//	
//	$('#ax-item-mod').removeClass();
//	$('#ax-item-mod').addClass('ocultar');
//	
//	$('#ax-mod-compl3').removeClass();
//	$('#ax-mod-compl3').addClass('col-md-1 hidden-xs ax-modcomple');
//	
//  return false;
//
//});


$('#ax-mod-compl3').click(function(){
	$('#ax-mod-compl2').removeClass();
	$('#ax-mod-compl2').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-compl3').removeClass();
	$('#ax-mod-compl3').addClass('ocultar');
	$('#ax-mod-compl4').removeClass();
	$('#ax-mod-compl4').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-compl4').click(function(){
	$('#ax-mod-compl4').removeClass();
	$('#ax-mod-compl4').addClass('ocultar');
	$('#ax-mod-compl2').removeClass();
	$('#ax-mod-compl2').addClass('col-md-9 ax-md');
	$('#ax-mod-compl3').removeClass();
	$('#ax-mod-compl3').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});