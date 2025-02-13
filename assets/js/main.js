document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('light-theme');
      
      // Tema durumuna göre ikon değişimi:
      if(document.body.classList.contains('light-theme')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });
    
    // Aktif navigasyon linklerini güncellemek için basit scroll event'i:
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
      sections.forEach(section => {
        const top = section.offsetTop - 80; // navbar yüksekliğine göre ayarlayın
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if(window.pageYOffset >= top && window.pageYOffset < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    });
    
    console.log("main.js dosyası yüklendi.");
  });
  