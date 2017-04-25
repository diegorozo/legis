var axActualPanel = '';
$(function(){
    $('.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});

function hidePanel(oId){
    $('#ax-mod-'+oId).removeClass('col-md-9 opacity');
    $('#ax-mod-'+oId).addClass('col-md-11');
    $('#ax-mod-'+oId+'ico').removeClass('col-md-3');
    $('#ax-mod-'+oId+'ico').addClass('col-md-1');
    $('.ax-modico2').removeClass('ocultar');
    $('.ax-modico3, .ax-modico4').removeClass('ver');
    $('#ax-mod-img'+oId).addClass('bounceInDown ver');

    if( $('#ax-collapse'+oId).is(":visible") ){
        $('.ax-item-mod-'+oId+'1').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'2').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'3').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'4').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'6').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'5').removeClass('bounceInRight ver');
        $('.ax-item-mod-'+oId+'1').addClass('ocultar');
        $('.ax-item-mod-'+oId+'2').addClass('ocultar');
        $('.ax-item-mod-'+oId+'3').addClass('ocultar');
        $('.ax-item-mod-'+oId+'4').addClass('ocultar');
        $('.ax-item-mod-'+oId+'5').addClass('ocultar');
        $('.ax-item-mod-'+oId+'6').addClass('ocultar');
        setTimeout(function(){$('#ax-mod-img'+oId).addClass('bounceOutDown ocultar');}, 1100);
        setTimeout(function(){$('#ax-mod-img'+oId).removeClass('bounceInDown ver');}, 1300);
    }else{
        setTimeout(function(){$('.ax-item-mod-'+oId+'1').addClass('bounceInRight ver');}, 100);
        setTimeout(function(){$('.ax-item-mod-'+oId+'2').addClass('bounceInRight ver');}, 300);
        setTimeout(function(){$('.ax-item-mod-'+oId+'3').addClass('bounceInRight ver');}, 500);
        setTimeout(function(){$('.ax-item-mod-'+oId+'4').addClass('bounceInRight ver');}, 700);
        setTimeout(function(){$('.ax-item-mod-'+oId+'5').addClass('bounceInRight ver');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'6').addClass('bounceInRight ver');}, 1100);
        setTimeout(function(){$('.ax-item-mod-'+oId+'1').removeClass('ocultar');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'2').removeClass('ocultar');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'3').removeClass('ocultar');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'4').removeClass('ocultar');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'5').removeClass('ocultar');}, 900);
        setTimeout(function(){$('.ax-item-mod-'+oId+'6').removeClass('ocultar');}, 1100);
        setTimeout(function(){$('#ax-mod-img'+oId).addClass('bounceInDown ver');}, 1100);
        setTimeout(function(){$('#ax-mod-img'+oId).removeClass('bounceOutDown ocultar');}, 1300);
    }
}

$('.ax-getId').click(function(){
    var oId = $(this).attr("id").substring(3);
    hidePanel(oId);
    axActualPanel = $(this).attr("id");
    console.log(oId);
});

$('.ax-getIdIco').click(function(){
    var substr = $(this).attr("id").length-3;
    var oId = $(this).attr("id").substring(7,substr);
    if( $('.ax-modico3').is(":visible") ){
        $('#ax-mod-'+oId).removeClass('col-md-9 opacity');
        $('#ax-mod-'+oId).addClass('col-md-11');
        $('#ax-mod-'+oId+'ico').removeClass('col-md-3');
        $('#ax-mod-'+oId+'ico').addClass('col-md-1');
        $('.ax-modico2').removeClass('ocultar');
        $('.ax-modico3, .ax-modico4').removeClass('ver');
    }
    else{
        $('#ax-mod-'+oId).removeClass('col-md-11');
        $('#ax-mod-'+oId).addClass('col-md-9 opacity');
        $('#ax-mod-'+oId+'ico').removeClass('col-md-1');
        $('#ax-mod-'+oId+'ico').addClass('col-md-3');
        $('.ax-modico2').addClass('ocultar');
        $('.ax-modico3, .ax-modico4').addClass('ver');
    }
});

$('.ax-mod-img').click(function(){
    var oId = $(this).attr("id").substring(10);
    console.log(oId);
    $('.ax-mod-img').removeClass('bounceInDown ver');
});

$('.ax-changear').click(function(){
    $('.ax-flagChange').removeClass('ax-change-arancel');
    $('.ax-flagChange').addClass('ax-ama-ara');
    $('.ax-flagChange',this).addClass('ax-change-arancel');
    $('.ax-flagChange',this).removeClass('ax-ama-ara');
});

$(".ax-changear").on('mouseenter', function() {
    $(this, ".ax-changear").css({"top":"-30px"});
});

$(".ax-changear").on('mouseleave', function(){
    $(this, ".ax-changear").css({"top":"0"});
});


$('.ax-principalMenu>a').click(function(){
    $('.ax-principalMenu').removeClass('active');
    $(this, 'a').parent().addClass('active');
});
