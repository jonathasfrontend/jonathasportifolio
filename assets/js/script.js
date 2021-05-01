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

// script da barra de rolagen scroll top

$(window).scroll(function(){
// sticky top script do scroll
if(this.scrollY > 100){
  $('.top').addClass("sticky");
}else{
  $('.top').removeClass("sticky");
  }
});

// Global site tag (gtag.js) - Google Analytics 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
    
gtag('config', 'G-EN3WEQ287C');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', 'G-EN3WEQ287C', 'auto');
  ga('send', 'pageview');

  