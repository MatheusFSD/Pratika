

//Animação de ancoragem

var $doc = $('html, body');
$('#link__formulario' || '#link__beneficios' || '#link__funcionamento').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__beneficios').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -72
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__funcionamento').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -72
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__formulario__hero').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__hero').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});



//Loading formulário

var formulario = $(".formulário__container-campos")

formulario.submit(function(event){
    $('body').toggleClass('loading');
});

//Mudar cor do header

let menu = document.querySelector('.header__orginal'); //qual a diferença entre queryselector e getelement?
let botaoTexto = document.querySelector('.texto__botao__header');

console.log(botaoTexto)

function activeScroll(){
    // console.log('oi')
    // console.log(menu)
    menu.classList.toggle('ativo', scrollY > 0);
    botaoTexto.classList.toggle('texto__botao__header__ativo', scrollY > 572)
}

window.addEventListener('scroll', activeScroll);