// Toggle sidebar menu
function toggleMenu(icon) {
  icon.classList.toggle("active");
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeSidebar");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.remove("active");
      document.querySelector(".menu-toggle").classList.remove("active");
    });
  }

  // Share button functionality
  const shareBtn = document.querySelector(".share-btn");
  if (shareBtn && navigator.share) {
    shareBtn.addEventListener("click", () => {
      navigator.share({
        title: "Leo End",
        url: window.location.href
      }).catch(console.error);
    });
  }

  // Display IP and location (mocked, real use needs backend)
  const ipEl = document.getElementById("ip-address");
  if (ipEl) {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        ipEl.innerHTML = `Your IP: ${data.ip}<br>${data.city}, ${data.region}`;
      })
      .catch(() => {
        ipEl.textContent = "Your IP: [unavailable]";
      });
  }
});
