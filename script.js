    // Music Toggle
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    musicToggle.addEventListener('click', () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = '⏸️';
      } else {
        bgMusic.pause();
        musicToggle.textContent = '▶️';
      }
    });

    // Modal functions
    function openValesModal() {
      document.getElementById('valesModal').style.display = 'block';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    function downloadVale(filename) {
      const link = document.createElement('a');
      link.href = filename;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal('valesModal');
    }

    // Fecha o modal se clicar fora
    window.onclick = function(event) {
      if (event.target.className === 'modal') {
        event.target.style.display = 'none';
      }
    }