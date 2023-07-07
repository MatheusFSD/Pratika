

//Animação de ancoragem


$("nav li a").click(function (event) {
    event.preventDefault();
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } else {
        dest = $(this.hash).offset().top;
    }
    $('html,body').animate({ scrollTop: dest }, 1000, 'swing');
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