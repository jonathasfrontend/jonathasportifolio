// digitando script de animação de texto
var typed = new Typed(".typed", {
    strings: ["Desenvolvedor fort-end e web designer."],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
});

//efeito parallasx na imagem de inicio
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallasx');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// efeito transição AOS

AOS.init({
    easing: 'ease-in-out-sine'
  });