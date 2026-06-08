// Footer year
document.querySelectorAll('#year').forEach(el => { el.textContent = new Date().getFullYear(); });

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// Microsoft Store button: activates automatically once you set a real URL.
// To go live: edit products/always-on-top-tasks.html and replace
// data-store-url="REPLACE_WITH_MICROSOFT_STORE_URL" with your listing URL.
const storeLink = document.getElementById('storeLink');
if (storeLink) {
  const url = storeLink.getAttribute('data-store-url');
  const placeholder = 'REPLACE_WITH_MICROSOFT_STORE_URL';
  const note = document.getElementById('storeNote');
  const badge = document.getElementById('statusBadge');

  if (url && url !== placeholder) {
    storeLink.href = url;
    if (note) note.style.display = 'none';
    if (badge) {
      badge.textContent = 'Available · Microsoft Store';
      badge.classList.remove('badge-soon');
      badge.classList.add('badge-live');
    }
  } else {
    storeLink.addEventListener('click', e => e.preventDefault());
    storeLink.style.opacity = '0.6';
    storeLink.style.cursor = 'not-allowed';
  }
}
