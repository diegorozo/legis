$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Modulo Mercado

$('#ax-mercado').click(function(){
	$('#ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial, #ax-mod-financiero').removeClass();
	$('#ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial, #ax-mod-financiero').addClass('ocultar');	
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-mercado').removeClass();
	$('#ax-mod-mercado').addClass('ver');
	$('#ax-mod-mercado').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-mercado .ax-md-2').addClass('ver');
	$('#ax-mod-mercadoico').addClass('ver');

	
  return false;

});


$('#ax-mod-mercadoico').click(function(){
	$('#ax-mod-mercado').removeClass();
	$('#ax-mod-mercado').addClass('ver');
	$('#ax-mod-mercado').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-mercadoico').removeClass();
	$('#ax-mod-mercadoico').addClass('ocultar');
	$('#ax-mod-mercadocont').removeClass();
	$('#ax-mod-mercadocont').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-mercadocont').click(function(){
	$('#ax-mod-mercadocont').removeClass();
	$('#ax-mod-mercadocont').addClass('ocultar');
	$('#ax-mod-mercado').removeClass();
	$('#ax-mod-mercado').addClass('ver');
	$('#ax-mod-mercado').addClass('col-md-9 ax-md');
	$('#ax-mod-mercadoico').removeClass();
	$('#ax-mod-mercadoico').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});


//Modulo Mercado






//Modulo Estadisticos


$('#ax-estadistica').click(function(){
	$('#ax-mod-mercado, #ax-mod-ranking, #ax-mod-comercial, #ax-mod-financiero').removeClass();
	$('#ax-mod-mercado, #ax-mod-ranking, #ax-mod-comercial, #ax-mod-financiero').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-estadistica').removeClass();
	$('#ax-mod-estadistica').addClass('ver');
	$('#ax-mod-estadistica').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-estidisticoico').addClass('ver');

	
  return false;

});

$('#ax-mod-estidisticoico').click(function(){
	$('#ax-mod-estadistica').removeClass();
	$('#ax-mod-estadistica').addClass('ver');
	$('#ax-mod-estadistica').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-estidisticoico').removeClass();
	$('#ax-mod-estidisticoico').addClass('ocultar');
	$('#ax-mod-estidisticocont').removeClass();
	$('#ax-mod-estidisticocont').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-estidisticocont').click(function(){
	$('#ax-mod-estidisticocont').removeClass();
	$('#ax-mod-estidisticocont').addClass('ocultar');
	$('#ax-mod-estadistica').removeClass();
	$('#ax-mod-estadistica').addClass('ver');
	$('#ax-mod-estadistica').addClass('col-md-9 ax-md');
	$('#ax-mod-estidisticoico').removeClass();
	$('#ax-mod-estidisticoico').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});

//Modulo Estadisticos












$('#ax-ranking').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-comercial, #ax-mod-financiero').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-comercial, #ax-mod-financiero').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-ranking').removeClass();
	$('#ax-mod-ranking').addClass('ver');
	$('#ax-mod-ranking').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-compl3').addClass('ver');

	
  return false;

});

$('#ax-comercial').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-financiero').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-financiero').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-comercial').removeClass();
	$('#ax-mod-comercial').addClass('ver');
	$('#ax-mod-comercial').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-compl3').addClass('ver');

	
  return false;

});

$('#ax-financiero').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-financiero').removeClass();
	$('#ax-mod-financiero').addClass('ver');
	$('#ax-mod-financiero').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-compl3').addClass('ver');

	
  return false;

});


