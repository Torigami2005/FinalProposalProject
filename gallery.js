
//dark mode toggle
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    darkmode = 'inactive';
}

if (darkmode === 'active') {
    enableDarkmode();
} else {
    disableDarkmode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


// gallery.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-item img");

  // Create lightbox elements dynamically
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  // Apply styles directly (optional if you want it self-contained)
  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.background = "rgba(0,0,0,0.8)";
  lightbox.style.display = "none";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";
  lightbox.style.zIndex = "9999";

  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.2)";
  img.style.transition = "transform 0.3s ease";

  // Show image on click
  images.forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden"; // disable scrolling
    });
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== img) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
