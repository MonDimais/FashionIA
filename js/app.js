// Navigate between pages with smooth transition
function goToPage(pageId) {
  // Get current active page
  const currentPage = document.querySelector(".page.active");
  const nextPage = document.getElementById(pageId);
  
  // Fade out current page
  currentPage.classList.add("fade-out");
  
  setTimeout(() => {
    // Hide all pages
    document.querySelectorAll(".page").forEach(div => {
      div.classList.remove("active");
      div.classList.add("hidden");
      div.classList.remove("fade-out");
    });
    
    // Show next page with fade in
    nextPage.classList.remove("hidden");
    nextPage.classList.add("active");
    nextPage.classList.add("fade-in");
    
    // Scroll to top for mobile users
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Remove fade-in class after animation
    setTimeout(() => {
      nextPage.classList.remove("fade-in");
    }, 500);
  }, 300);
}

// Dummy rules
const rules = {
  "kaos hitam": {
    bawahan: "assets/img/jeans_biru.jpg",
    sepatu: "assets/img/sneakers_putih.jpg",
    aksesori: "assets/img/kacamata_hitam.jpg"
  },
  "kemeja putih": {
    bawahan: "assets/img/chino_beige.jpg",
    sepatu: "assets/img/loafers_coklat.jpg",
    aksesori: "assets/img/jam_tangan.jpg"
  },
  "sweater abu-abu": {
    bawahan: "assets/img/jeans_hitam.jpg",
    sepatu: "assets/img/boots_coklat.jpg",
    aksesori: "assets/img/scarf.jpg"
  },
  "kemeja denim biru": {
    bawahan: "assets/img/chino_hitam.jpg",
    sepatu: "assets/img/sneakers_hitam.jpg",
    aksesori: "assets/img/topi_snapback.jpg"
  },
};

function recommend(item) {
  // Add clicked animation to item
  event.currentTarget.classList.add('clicked');
  
  // Show loading with fade in
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  
  loading.classList.remove("hidden");
  loading.classList.add("fade-in");
  result.classList.add("hidden");
  
  // Smooth scroll untuk mobile
  setTimeout(() => {
    loading.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);

  setTimeout(() => {
    const outfit = rules[item];
    const html = `
      <h3 class="slide-up">✨ Hasil Rekomendasi</h3>
      <p class="slide-up"><b>${item}</b> cocok dipadukan dengan:</p>
      <div class="outfit-grid">
        <div class="outfit-item fade-in-up" style="animation-delay: 0.1s">
          <img src="${outfit.bawahan}" alt="Bawahan">
          <span>Bawahan</span>
        </div>
        <div class="outfit-item fade-in-up" style="animation-delay: 0.2s">
          <img src="${outfit.sepatu}" alt="Sepatu">
          <span>Sepatu</span>
        </div>
        <div class="outfit-item fade-in-up" style="animation-delay: 0.3s">
          <img src="${outfit.aksesori}" alt="Aksesori">
          <span>Aksesori</span>
        </div>
      </div>
      <button class="btn pulse" onclick="goToPage('page3')">Lanjutkan</button>
    `;
    result.innerHTML = html;

    // Hide loading and show result with animation
    loading.classList.add("fade-out");
    setTimeout(() => {
      loading.classList.add("hidden");
      loading.classList.remove("fade-in", "fade-out");
      result.classList.remove("hidden");
      result.classList.add("fade-in");
      
      // Scroll to result on mobile
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    
    // Remove clicked class from item
    document.querySelector('.item.clicked').classList.remove('clicked');
  }, 1500);
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn, .item');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});