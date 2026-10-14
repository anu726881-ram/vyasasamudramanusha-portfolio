const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const profilePhoto = document.getElementById('profilePhoto');

profilePhoto.addEventListener('error', () => {
  profilePhoto.hidden = true;
}, { once: true });

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copyEmail').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('anu726881@gmail.com');
    status.textContent = 'Email address copied.';
  } catch (error) {
    status.textContent = 'Please copy this email manually: anu726881@gmail.com';
  }
});
