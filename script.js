/**
 * script.js â€” Main JavaScript for R. Sivanesh Portfolio
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 *  1. Data  â† ADD YOUR PROJECTS & CERTS HERE
 *  2. Theme toggle
 *  3. Navbar (scroll-aware + active link)
 *  4. Mobile menu
 *  5. Reveal-on-scroll animations
 *  6. Projects (render + filter + search)
 *  7. Certificates (render + modal)
 *  8. Contact form + Supabase
 *  9. Scroll-to-top
 * 10. Footer year
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 */

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   1. DATA â€” Edit here to add your content
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

/**
 * PROJECTS
 * To add a project: copy one object, paste it in the array,
 * and place the image in assets/projects/.
 *
 * category options: 'ai' | 'web' | 'game' | 'python' | 'other'
 * Set github or demo to '' to hide that button.
 */
const PROJECTS = [
  {
    id: 1,
    title: 'AI Project (Coming Soon)',
    description: 'Working on an exciting AI/ML project. Details will be updated here once complete. Replace this card by editing the PROJECTS array in script.js.',
    image: 'assets/projects/project1.png',
    tags: ['Python', 'AI', 'ML'],
    category: 'ai',
    github: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Web Project (Coming Soon)',
    description: 'A web development project in progress. Edit the PROJECTS array in script.js to add your real project title and description.',
    image: 'assets/projects/project1.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    github: '',
    demo: '',
  },
  {
    id: 3,
    title: 'Game Dev Project (Coming Soon)',
    description: 'A Unity-based game project. Edit the PROJECTS array in script.js to replace this placeholder with your real project.',
    image: 'assets/projects/project1.png',
    tags: ['Unity', 'C#', 'Blender'],
    category: 'game',
    github: '',
    demo: '',
  },
];

/**
 * CERTIFICATIONS
 * To add a cert:
 *  1. Put the image in assets/certificates/
 *  2. Uncomment or copy an object below.
 */
const CERTS = [
  {
    id: 1,
    title: 'Diploma in Python',
    org: 'Issuing Organization',
    date: '2025',
    image: 'assets/certificates/certificate1.jpg',
  },
  // {
  //   id: 2,
  //   title: 'Machine Learning Fundamentals',
  //   org: 'Coursera / Google',
  //   date: 'June 2025',
  //   image: 'assets/certificates/certificate2.jpg',
  // },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   2. THEME TOGGLE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Apply saved preference or default dark
const saved = localStorage.getItem('rs-theme') || 'dark';
html.setAttribute('data-theme', saved);
setIcon(saved);

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('rs-theme', next);
  setIcon(next);
});

function setIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   3. NAVBAR â€” scrolled state + active section link
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', onScroll, { passive: true });

function onScroll() {
  const y = window.scrollY;

  // Sticky style
  navbar.classList.toggle('scrolled', y > 30);

  // Scroll-to-top button
  scrollTopBtn.classList.toggle('show', y > 400);

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   4. MOBILE MENU
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});

document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', closeMobile);
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
  mobileMenu.setAttribute('aria-hidden', true);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   5. REVEAL ANIMATIONS (IntersectionObserver)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay || 0);
    setTimeout(() => entry.target.classList.add('in'), delay);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1 });

// Observe all .reveal elements
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Re-observe helper (used after dynamic DOM renders)
function observeNew(parent) {
  parent.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   6. PROJECTS â€” render + filter + search
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const projGrid = document.getElementById('proj-grid');
const projEmpty = document.getElementById('proj-empty');
const projSearch = document.getElementById('proj-search');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'all';
let searchQ = '';

/** Build HTML for one project card */
function projectCard(p) {
  const tags = p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');
  const ghBtn = p.github
    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="proj-link">
         <i class="fab fa-github"></i> GitHub</a>` : '';
  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="proj-link primary">
         <i class="fas fa-external-link-alt"></i> Demo</a>` : '';
  const fallback = !p.github && !p.demo
    ? `<span style="font-size:0.78rem;color:var(--text-3);">ðŸš§ In progress</span>` : '';

  return `
    <article class="proj-card reveal" aria-label="${p.title}">
      <div class="proj-img-wrap">
        <img src="${p.image}" alt="${p.title}" class="proj-img" loading="lazy"
             onerror="this.src='assets/projects/project1.png'" />
      </div>
      <div class="proj-body">
        <span class="proj-cat">${p.category.toUpperCase()}</span>
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.description}</p>
        <div class="proj-tags">${tags}</div>
        <div class="proj-links">${ghBtn}${demoBtn}${fallback}</div>
      </div>
    </article>`;
}

function renderProjects() {
  const q = searchQ.toLowerCase();
  const filtered = PROJECTS.filter(p => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  projGrid.innerHTML = filtered.map(projectCard).join('');
  projEmpty.style.display = filtered.length === 0 ? 'flex' : 'none';
  observeNew(projGrid);
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});

projSearch.addEventListener('input', () => {
  searchQ = projSearch.value.trim();
  renderProjects();
});

renderProjects(); // initial render

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   7. CERTIFICATES â€” render + modal
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const certGrid = document.getElementById('cert-grid');
const certModal = document.getElementById('cert-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalOrg = document.getElementById('modal-org');
const modalDate = document.getElementById('modal-date');

/** Build HTML for one certificate card */
function certCard(c) {
  return `
    <article class="cert-card reveal" role="button" tabindex="0"
             aria-label="View ${c.title} certificate"
             data-id="${c.id}"
             onclick="openModal(${c.id})"
             onkeydown="if(event.key==='Enter'||event.key===' ')openModal(${c.id})">
      <div class="cert-img-wrap">
        <img src="${c.image}" alt="${c.title}" class="cert-img" loading="lazy"
             onerror="this.src='assets/certificates/certificate1.jpg'" />
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-org">${c.org}</p>
        <p class="cert-date">${c.date}</p>
        <span class="cert-view-btn" aria-hidden="true">
          <i class="fas fa-eye"></i> View Certificate
        </span>
      </div>
    </article>`;
}

certGrid.innerHTML = CERTS.map(certCard).join('');
observeNew(certGrid);

/** Open the certificate modal */
function openModal(id) {
  const cert = CERTS.find(c => c.id === id);
  if (!cert) return;
  modalImg.src = cert.image;
  modalImg.alt = cert.title;
  modalTitle.textContent = cert.title;
  modalOrg.textContent = cert.org;
  modalDate.textContent = cert.date;
  certModal.classList.add('open');
  certModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  certModal.classList.remove('open');
  certModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.openModal = openModal; // expose for inline onclick

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   8. CONTACT FORM + SUPABASE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitLabel = document.getElementById('submit-label');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const name = document.getElementById('f-name').value;
  const email = document.getElementById('f-email').value;
  const message = document.getElementById('f-msg').value;

  if (!validate(name, email, message)) return;

  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  feedback.style.display = 'none';

  const result = await insertMessage(name.trim(), email.trim(), message.trim());


  if (result.success) {
    feedback.className = 'form-feedback success';
    feedback.textContent = 'Message sent successfully. I will get back to you soon.';
    feedback.style.display = 'block';
    contactForm.reset();
  } else {
    feedback.className = 'form-feedback error';
    feedback.textContent = 'Failed to send. Please try again.';
    feedback.style.display = 'block';
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
});


function validate(name, email, message) {
  let ok = true;
  const clearErr = id => document.getElementById(id).textContent = '';
  const setErr = (id, msg) => { document.getElementById(id).textContent = msg; ok = false; };
  const setInput = (id, hasErr) => document.getElementById(id).classList.toggle('err', hasErr);

  ['err-name', 'err-email', 'err-msg'].forEach(clearErr);
  setInput('f-name', false);
  setInput('f-email', false);
  setInput('f-msg', false);

  if (!name.trim() || name.trim().length < 2) {
    setErr('err-name', 'Please enter your name.'); setInput('f-name', true);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setErr('err-email', 'Please enter a valid email.'); setInput('f-email', true);
  }
  if (!message.trim() || message.trim().length < 10) {
    setErr('err-msg', 'Message must be at least 10 characters.'); setInput('f-msg', true);
  }
  return ok;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   9. SCROLL TO TOP
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   10. FOOTER YEAR
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
document.getElementById('yr').textContent = new Date().getFullYear();

/* â”€â”€â”€ Smooth anchor scroll (offset for fixed navbar) â”€â”€â”€ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMobile();
  });
});

/* -----------------------------------------------


/* ==============================================
   NAVBAR BRAND — slow pure opacity cross-fade
   R. Sivanesh <-> R.S STUDIOS (infinite loop)
   Hold: 3.2s visible | Fade: 2.2s (matches CSS)
   ============================================== */
(function brandAnimation() {
  var t1 = document.getElementById('brand-t1');
  var t2 = document.getElementById('brand-t2');
  if (!t1 || !t2) return;

  var HOLD = 2500;   // ms each label stays fully visible
  var FADE = 1400;   // ms — must match CSS transition duration

  var showing = 1;   // 1 = t1 visible, 2 = t2 visible

  function swap() {
    if (showing === 1) {
      // Fade out t1, fade in t2
      t1.className = 'brand-text brand-t1 hidden';
      t2.className = 'brand-text brand-t2 visible';
      showing = 2;
    } else {
      // Fade out t2, fade in t1
      t2.className = 'brand-text brand-t2 hidden';
      t1.className = 'brand-text brand-t1 visible';
      showing = 1;
    }
    // Next swap: wait for fade to finish + hold period
    setTimeout(swap, FADE + HOLD);
  }

  // Start first swap after the initial hold
  setTimeout(swap, HOLD);
})();
