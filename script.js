function toggleMenu(x) {
  x.classList.toggle("active");
  const menu = document.getElementById("sideMenu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip-address').textContent = "Your IP: " + data.ip;
  });


const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuButton.addEventListener('click', () => {
  sidebar.style.left = '0'; // Slide in
});

closeSidebar.addEventListener('click', () => {
  sidebar.style.left = '-250px'; // Slide out
});
