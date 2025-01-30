document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("download-cv").addEventListener("click", function () {
        // URL do seu currículo
        const url = "./assets/curriculo/CURRICULO-MAYLON.pdf";
      
        // Cria um elemento <a> temporário para forçar o download
        const link = document.createElement("a");
        link.href = url;
        link.download = "CURRICULO-MAYLON.pdf"; // Nome do arquivo para download
        link.click();
      });

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // Altere "50" para ajustar quando o efeito acontece
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
});


