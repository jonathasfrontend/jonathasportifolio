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

// carousel

 $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
        }
      });