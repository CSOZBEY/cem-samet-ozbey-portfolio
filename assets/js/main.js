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
    
    console.log("main.js dosyası yüklendi.");
  });
  