var slider = $('#caja');

var siguiente = $('#btn-siguiente');
var anterior = $('#btn-atras');

$('#caja .section-caja:last').insertBefore('#caja .section-caja:first');

slider.css('margin-left','-'+100+'%');

function moverD() {
    slider.animate({
        marginLeft:'-'+200+'%'
    },5000, function(){
        $('#caja .section-caja:first').insertAfter
        ('#caja section-caja:last');
        slider.css('margin-left','-'+100+'%');
    });
}

function moverI() {
    slider.animate({
        marginLeft:0
    },5000, function(){
        $('#caja .section-caja:last').insertBefore
        ('#caja section-caja:first');
        slider.css('margin-left','-'+100+'%');
    });
}

function autoplay() {
    interval = setInterval(function(){
        moverD();
    },5000);
}

siguiente.on('click',function() {
    moverD();
    clearInterval(interval);
    autoplay();
});

anterior.on('click',function() {
    moverI();
    clearInterval(interval);
    autoplay();
});

autoplay();