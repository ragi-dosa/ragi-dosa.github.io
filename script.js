 const menuBtn = document.getElementById('menu-btn');
      const sideMenu = document.getElementById('side-menu');
      menuBtn.onclick = () => {
        sideMenu.classList.toggle('open');
      };
      // Optional: close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && e.target !== menuBtn) {
          sideMenu.classList.remove('open');
        }
      });