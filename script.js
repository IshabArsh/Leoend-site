function toggleMenu(btn) {
  const sidebar = document.getElementById('sidebar');
  if (btn) btn.classList.toggle('active');
  sidebar.classList.toggle('active');
}