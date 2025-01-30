document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 1.5,
  });

  // Função de animação
  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }

  // Inicia o loop de animação
  requestAnimationFrame(raf);

  // Scroll suave para âncoras
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const targetOffset = targetElement.offsetTop;
              lenis.scrollTo(targetOffset);
          }
      });
  });
});
