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
	$('#ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-comercialico, #ax-mod-financieroico').removeClass();
	$('#ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-comercialico, #ax-mod-financieroico').addClass('ocultar');
	$('#ax-mod-mercadoico').addClass('col-md-1 hidden-xs ax-modcomple');
	
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
	$('#ax-mod-mercadoico, #ax-mod-rankingico, #ax-mod-comercialico, #ax-mod-financieroico').removeClass();
	$('#ax-mod-mercadoico, #ax-mod-rankingico, #ax-mod-comercialico, #ax-mod-financieroico').addClass('ocultar');
	$('#ax-mod-estidisticoico').addClass('col-md-1 hidden-xs ax-modcomple');
	
	
	
	
	
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




//Modulo Ranking


$('#ax-ranking').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-comercial, #ax-mod-financiero').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-comercial, #ax-mod-financiero').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-ranking').removeClass();
	$('#ax-mod-ranking').addClass('ver');
	$('#ax-mod-ranking').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-rankingico').addClass('ver');
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-comercialico, #ax-mod-financieroico').removeClass();
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-comercialico, #ax-mod-financieroico').addClass('ocultar');
	$('#ax-mod-rankingico').addClass('col-md-1 hidden-xs ax-modcomple');

	
  return false;

});

$('#ax-mod-rankingico').click(function(){
	$('#ax-mod-ranking').removeClass();
	$('#ax-mod-ranking').addClass('ver');
	$('#ax-mod-ranking').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-rankingico').removeClass();
	$('#ax-mod-rankingico').addClass('ocultar');
	$('#ax-mod-rankingcont').removeClass();
	$('#ax-mod-rankingcont').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-rankingcont').click(function(){
	$('#ax-mod-rankingcont').removeClass();
	$('#ax-mod-rankingcont').addClass('ocultar');
	$('#ax-mod-ranking').removeClass();
	$('#ax-mod-ranking').addClass('ver');
	$('#ax-mod-ranking').addClass('col-md-9 ax-md');
	$('#ax-mod-rankingico').removeClass();
	$('#ax-mod-rankingico').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});



//Modulo Comercial

$('#ax-comercial').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-financiero').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-financiero').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-comercial').removeClass();
	$('#ax-mod-comercial').addClass('ver');
	$('#ax-mod-comercial').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-comercialico').addClass('ver');
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-financieroico').removeClass();
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-financieroico').addClass('ocultar');
	$('#ax-mod-comercialico').addClass('col-md-1 hidden-xs ax-modcomple');

	
  return false;

});

$('#ax-mod-comercialico').click(function(){
	$('#ax-mod-comercial').removeClass();
	$('#ax-mod-comercial').addClass('ver');
	$('#ax-mod-comercial').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-comercialico').removeClass();
	$('#ax-mod-comercialico').addClass('ocultar');
	$('#ax-mod-comercialcont').removeClass();
	$('#ax-mod-comercialcont').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-comercialcont').click(function(){
	$('#ax-mod-comercialcont').removeClass();
	$('#ax-mod-comercialcont').addClass('ocultar');
	$('#ax-mod-comercial').removeClass();
	$('#ax-mod-comercial').addClass('ver');
	$('#ax-mod-comercial').addClass('col-md-9 ax-md');
	$('#ax-mod-comercialico').removeClass();
	$('#ax-mod-comercialico').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});


//Modulo Comercial




//Modulo Financiero

$('#ax-financiero').click(function(){
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial').removeClass();
	$('#ax-mod-mercado, #ax-mod-estadistica, #ax-mod-ranking, #ax-mod-comercial').addClass('ocultar');
	$('#ax-mod-compl2').addClass('ocultar');
	$('#ax-mod-financiero').removeClass();
	$('#ax-mod-financiero').addClass('ver');
	$('#ax-mod-financiero').addClass('col-md-9 animated fadeIn ver ax-md');
	$('#ax-mod-financieroico').addClass('ver');
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-comercialico').removeClass();
	$('#ax-mod-mercadoico, #ax-mod-estidisticoico, #ax-mod-rankingico, #ax-mod-comercialico').addClass('ocultar');
	$('#ax-mod-financieroico').addClass('col-md-1 hidden-xs ax-modcomple');
	
  return false;

});

$('#ax-mod-financieroico').click(function(){
	$('#ax-mod-financiero').removeClass();
	$('#ax-mod-financiero').addClass('ver');
	$('#ax-mod-financiero').addClass('col-md-6 ax-md opacity');
	$('#ax-mod-financieroico').removeClass();
	$('#ax-mod-financieroico').addClass('ocultar');
	$('#ax-mod-financierocont').removeClass();
	$('#ax-mod-financierocont').addClass('ver col-md-4 ax-modcomple2 animated fadeIn');
	
  return false;
});

$('#ax-mod-financierocont').click(function(){
	$('#ax-mod-financierocont').removeClass();
	$('#ax-mod-financierocont').addClass('ocultar');
	$('#ax-mod-financiero').removeClass();
	$('#ax-mod-financiero').addClass('ver');
	$('#ax-mod-financiero').addClass('col-md-9 ax-md');
	$('#ax-mod-financieroico').removeClass();
	$('#ax-mod-financieroico').addClass('col-md-1 hidden-xs ax-modcomple ver animated fadeIn');

  return false;
});

//Modulo Financiero





