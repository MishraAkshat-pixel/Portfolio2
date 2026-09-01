/**
 * ====================================================================
 * PORTFOLIO APPLICATION LOGIC - AKSHAT MISHRA
 * B.Tech CSE 2nd Year Portfolio Architecture
 * Luxury Gold & Obsidian Palette with PTRL Projects & Zoom Motion
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.portfolioConfig;
  if (!config) {
    console.error("portfolioConfig is not loaded.");
    return;
  }

  // 1. Initialize Icons (Lucide)
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Setup Scroll Progress Bar
  initScrollProgress();

  // 3. Setup Custom Glowing Cursor (Desktop Only)
  initCustomCursor();

  // 4. Setup Typewriter Animation for Hero Section
  initTypewriter(config.personal.typedTitles);

  // 5. Setup Navigation with Zoom Scroll Transitions
  initNavigation();

  // 6. Populate Skills with Beginner/Intermediate/Advanced tiers
  renderSkills(config.skills);
  setupSkillFilters();

  // 7. Populate Projects with P → T → R → L Formula
  renderProjects(config.projects);
  setupProjectFilters();

  // 8. Populate Education Section
  renderEducation(config.education);

  // 9. Populate Certifications & Achievements
  renderCertifications(config.certifications);
  renderAchievements(config.achievements);

  // 10. Populate DSA Section & Code Snippets Tabs
  renderDsaSection(config.dsaSection);

  // 11. Setup Contact Form & Connect With Me Actions
  initContactForm(config.contact);

  // 12. Setup Developer Terminal Card Animation
  initTerminal(config.codeSnippet);

  // 13. Setup Customization Guide Modal
  initCustomizationGuideModal();

  // 14. Setup Scroll-Driven Zoom Motion & Parallax Effects
  initScrollZoomMotion();
  initCardMagneticTilt();
  initQuickNavPill();

  // Refresh Lucide icons after dynamic insertions
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  }, { passive: true });
}

/* =========================================================
   CUSTOM GLOWING CURSOR
   ========================================================= */
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  }, { passive: true });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  const interactives = document.querySelectorAll('a, button, input, textarea, .glass-card, .filter-tab, .quick-nav-dot');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });
}

/* =========================================================
   HERO TYPEWRITER ANIMATION
   ========================================================= */
function initTypewriter(titles) {
  const el = document.getElementById('typewriter-text');
  if (!el || !titles || titles.length === 0) return;

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      el.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      el.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* =========================================================
   NAVIGATION & CINEMATIC ZOOM SCROLL TRANSITIONS
   ========================================================= */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const allNavAnchors = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('glass-nav', 'py-3');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('glass-nav', 'py-3');
      navbar.classList.add('py-4');
    }

    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 160;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-[#D6BB93]', 'font-bold', 'border-b', 'border-[#C9AB7D]');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('text-[#D6BB93]', 'font-bold', 'border-b', 'border-[#C9AB7D]');
      }
    });

    const dots = document.querySelectorAll('.quick-nav-dot');
    dots.forEach((dot) => {
      dot.classList.remove('active');
      if (dot.getAttribute('data-target') === current) {
        dot.classList.add('active');
      }
    });
  }, { passive: true });

  allNavAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      e.preventDefault();

      document.body.classList.add('zoom-out-transition');

      const navOffset = navbar ? navbar.offsetHeight + 10 : 80;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        document.body.classList.remove('zoom-out-transition');
        targetSection.classList.remove('section-zoom-focused');
        void targetSection.offsetWidth;
        targetSection.classList.add('section-zoom-focused');

        setTimeout(() => {
          targetSection.classList.remove('section-zoom-focused');
        }, 1000);
      }, 450);

      if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
        mobileDrawer.classList.add('hidden');
      }
    });
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
}

/* =========================================================
   SCROLL ZOOM MOTION SYSTEM
   ========================================================= */
function initScrollZoomMotion() {
  const headers = document.querySelectorAll('section > div > .section-header-wrap');
  headers.forEach((h) => h.classList.add('section-header-zoom'));

  const zoomTargets = document.querySelectorAll(
    '.glass-card, .terminal-window, .timeline-node, #hero-3d-canvas-container, .section-header-zoom'
  );

  zoomTargets.forEach((el, index) => {
    if (!el.classList.contains('section-header-zoom')) {
      el.classList.add('scroll-zoom-item');
      const staggerIndex = (index % 4) + 1;
      el.classList.add(`stagger-${staggerIndex}`);
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const zoomObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-zoomed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  zoomTargets.forEach((el) => zoomObserver.observe(el));

  const ambientGlows = document.querySelectorAll('.ambient-glow');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    ambientGlows.forEach((glow, i) => {
      const speed = (i + 1) * 0.08;
      const translateY = scrollY * speed;
      glow.style.transform = `translateY(${translateY}px)`;
    });
  }, { passive: true });
}

/* =========================================================
   INTERACTIVE 3D CARD SPOTLIGHT & MAGNETIC TILT
   ========================================================= */
function initCardMagneticTilt() {
  const cards = document.querySelectorAll('.glass-card, .terminal-window');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* =========================================================
   FLOATING QUICK NAVIGATION PILL
   ========================================================= */
function initQuickNavPill() {
  const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'connect'];
  const labels = ['Home', 'About Me', 'Skills', 'Projects (PTRL)', 'Education', 'Certifications', 'Connect'];

  const pill = document.createElement('div');
  pill.id = 'quick-nav-pill';
  pill.title = 'Quick Navigation';

  sections.forEach((sec, idx) => {
    const dot = document.createElement('a');
    dot.href = `#${sec}`;
    dot.className = `quick-nav-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('data-target', sec);
    dot.setAttribute('title', labels[idx]);
    pill.appendChild(dot);
  });

  document.body.appendChild(pill);
}

/* =========================================================
   DEVELOPER TERMINAL CODE CARD
   ========================================================= */
function initTerminal(snippet) {
  const codeContainer = document.getElementById('terminal-code-body');
  if (!codeContainer || !snippet) return;

  const raw = snippet.content;
  const formatted = raw
    .replace(/(const|let|var|class|return)/g, '<span class="code-keyword">$1</span>')
    .replace(/(name|degree|university|areaOfInterest|technicalSkills|currentFocus|careerAspiration|mindset|availableFor|dsa|projects|tools):/g, '<span class="code-property">$1</span>:')
    .replace(/("[^"]*")/g, '<span class="code-string">$1</span>');

  codeContainer.innerHTML = formatted;
}

/* =========================================================
   SKILLS RENDERING (Beginner → Intermediate → Advanced)
   ========================================================= */
function renderSkills(skillCategories) {
  const container = document.getElementById('skills-grid-container');
  if (!container || !skillCategories) return;

  container.innerHTML = '';

  skillCategories.forEach((cat, idx) => {
    const card = document.createElement('div');
    card.className = `skill-category-card glass-card p-6 relative group transition-all duration-300 scroll-zoom-item stagger-${(idx % 4) + 1}`;
    card.setAttribute('data-category', cat.id);

    const itemsHtml = cat.items
      .map((item) => {
        let levelBadgeStyle = "bg-[#070604] text-[#A89576] border-[#62451F]";
        if (item.level === "Advanced") {
          levelBadgeStyle = "bg-[#62451F] text-[#D6BB93] border-[#C9AB7D] font-bold";
        } else if (item.level === "Intermediate") {
          levelBadgeStyle = "bg-[#161410] text-[#D6BB93] border-[#62451F]";
        }

        return `
          <div class="p-3.5 rounded-xl bg-[#161410] border border-[#62451F] hover:border-[#C9AB7D] hover:bg-[#070604] transition-all duration-300 hover:scale-[1.02]">
            <div class="flex items-center justify-between mb-1.5">
              <span class="font-bold text-[#E8DCC8] text-sm flex items-center gap-2">
                <i data-lucide="${item.icon}" class="w-4 h-4 text-[#C9AB7D]"></i>
                ${item.name}
              </span>
              <span class="text-[11px] px-2.5 py-0.5 rounded-full font-mono border ${levelBadgeStyle}">${item.level}</span>
            </div>
            <p class="text-xs text-[#A89576]">${item.note}</p>
          </div>
        `;
      })
      .join('');

    card.innerHTML = `
      <div class="flex items-center gap-3 mb-4 pb-3 border-b border-[#62451F]">
        <div class="w-11 h-11 rounded-xl bg-[#161410] border border-[#C9AB7D] flex items-center justify-center text-[#D6BB93] group-hover:scale-110 transition-transform">
          <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold text-[#E8DCC8] font-display">${cat.category}</h3>
          <p class="text-xs text-[#A89576]">${cat.description}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${itemsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

function setupSkillFilters() {
  const tabs = document.querySelectorAll('.skill-filter-btn');
  const cards = document.querySelectorAll('.skill-category-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      cards.forEach((card) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.classList.remove('tab-zoom-pop');
          void card.offsetWidth;
          card.classList.add('tab-zoom-pop');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* =========================================================
   PROJECTS RENDERING (Structured P → T → R → L Formula)
   ========================================================= */
function renderProjects(projects) {
  const container = document.getElementById('projects-grid-container');
  if (!container || !projects) return;

  container.innerHTML = '';

  projects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = `project-card glass-card p-6 md:p-8 relative group flex flex-col justify-between transition-all duration-300 hover:border-[#C9AB7D] scroll-zoom-item stagger-${(idx % 4) + 1}`;
    card.setAttribute('data-category', proj.categoryKey);

    const techBadges = proj.technologies
      .map((t) => `<span class="px-2.5 py-1 text-xs rounded-md bg-[#161410] text-[#E8DCC8] border border-[#62451F] font-mono">${t}</span>`)
      .join('');

    const highlightBadge = proj.highlight
      ? `<span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#161410] text-[#D6BB93] border border-[#C9AB7D] flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-[#C9AB7D] animate-pulse"></span> ${proj.badge}</span>`
      : `<span class="px-3 py-1 rounded-full text-xs font-mono text-[#A89576] bg-[#161410] border border-[#62451F]">${proj.badge}</span>`;

    card.innerHTML = `
      <div>
        <!-- Card Header -->
        <div class="flex items-center justify-between mb-4">
          ${highlightBadge}
          <span class="text-xs font-mono text-[#A89576]">${proj.categoryLabel}</span>
        </div>

        <h3 class="text-2xl font-bold text-[#E8DCC8] mb-4 font-display group-hover:text-[#D6BB93] transition-colors flex items-center gap-2.5">
          <i data-lucide="${proj.icon}" class="w-6 h-6 text-[#C9AB7D] group-hover:scale-110 transition-transform"></i>
          <span>${proj.title}</span>
        </h3>

        <!-- P → T → R → L Formula Breakdown -->
        <div class="space-y-3 mb-6">
          <!-- Problem -->
          <div class="p-3 rounded-lg bg-[#161410] border border-[#62451F]">
            <div class="text-xs font-mono font-bold text-[#D6BB93] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span class="px-1.5 py-0.2 rounded bg-[#62451F] text-[#E8DCC8]">P</span>
              <span>Problem Statement</span>
            </div>
            <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed">${proj.problem}</p>
          </div>

          <!-- Technology & Role -->
          <div class="p-3 rounded-lg bg-[#161410] border border-[#62451F]">
            <div class="text-xs font-mono font-bold text-[#D6BB93] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span class="px-1.5 py-0.2 rounded bg-[#62451F] text-[#E8DCC8]">T</span>
              <span>Technology & Role</span>
            </div>
            <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed"><strong class="text-[#D6BB93]">Tech:</strong> ${proj.technology}</p>
            <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed mt-1"><strong class="text-[#D6BB93]">Role:</strong> ${proj.myRole}</p>
          </div>

          <!-- Result -->
          <div class="p-3 rounded-lg bg-[#161410] border border-[#62451F]">
            <div class="text-xs font-mono font-bold text-[#D6BB93] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span class="px-1.5 py-0.2 rounded bg-[#62451F] text-[#E8DCC8]">R</span>
              <span>Result & Solution</span>
            </div>
            <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed">${proj.result}</p>
          </div>

          <!-- Learning -->
          <div class="p-3 rounded-lg bg-[#161410] border border-[#62451F]">
            <div class="text-xs font-mono font-bold text-[#D6BB93] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span class="px-1.5 py-0.2 rounded bg-[#62451F] text-[#E8DCC8]">L</span>
              <span>Key Technical Learning</span>
            </div>
            <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed">${proj.learning}</p>
          </div>
        </div>
      </div>

      <!-- Card Footer -->
      <div>
        <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#62451F]">
          ${techBadges}
        </div>

        <div class="flex items-center justify-between pt-2">
          <span class="text-xs font-mono text-[#C9AB7D] flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#D6BB93]"></span> ${proj.status}
          </span>
          <div class="flex items-center gap-2">
            ${proj.githubUrl !== '' ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-[#161410] hover:bg-[#62451F] text-[#E8DCC8] hover:text-[#D6BB93] border border-[#62451F] transition-all hover:scale-110" title="GitHub Repository [ADD LINK]">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 text-xs rounded-lg bg-[#161410] hover:bg-[#62451F] text-[#D6BB93] border border-[#C9AB7D] flex items-center gap-1.5 transition-all hover:scale-105 font-semibold" title="View Project [ADD LINK]">
              <span>Project Details</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function setupProjectFilters() {
  const tabs = document.querySelectorAll('.project-filter-tab');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      cards.forEach((card) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.classList.remove('tab-zoom-pop');
          void card.offsetWidth;
          card.classList.add('tab-zoom-pop');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* =========================================================
   EDUCATION SECTION (Structured Academic Cards)
   ========================================================= */
function renderEducation(educationList) {
  const container = document.getElementById('education-grid-container');
  if (!container || !educationList) return;

  container.innerHTML = educationList
    .map((edu, idx) => `
      <div class="glass-card p-6 md:p-7 relative group transition-all duration-300 scroll-zoom-item stagger-${idx + 1}">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span class="text-xs font-mono font-bold text-[#D6BB93] px-3 py-1 rounded-full bg-[#161410] border border-[#62451F]">${edu.period}</span>
          <span class="text-xs font-mono text-[#A89576]">${edu.status}</span>
        </div>
        <h3 class="text-xl font-bold text-[#E8DCC8] mb-1 font-display group-hover:text-[#D6BB93] transition-colors">${edu.degree}</h3>
        <h4 class="text-sm font-semibold text-[#C9AB7D] mb-3">${edu.institution} • <span class="text-xs font-mono text-[#A89576]">${edu.location}</span></h4>
        <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed">${edu.details}</p>
      </div>
    `)
    .join('');
}

/* =========================================================
   CERTIFICATIONS & ACHIEVEMENTS
   ========================================================= */
function renderCertifications(certList) {
  const container = document.getElementById('certifications-container');
  if (!container || !certList) return;

  container.innerHTML = certList
    .map((cert, idx) => `
      <div class="glass-card p-5 relative group transition-all duration-300 scroll-zoom-item stagger-${(idx % 3) + 1}">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-[#161410] border border-[#62451F] flex items-center justify-center text-[#D6BB93] group-hover:scale-110 transition-transform">
            <i data-lucide="${cert.icon}" class="w-5 h-5 text-[#C9AB7D]"></i>
          </div>
          <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#161410] text-[#D6BB93] border border-[#62451F]">${cert.period}</span>
        </div>
        <h4 class="text-base font-bold text-[#E8DCC8] mb-1 font-display group-hover:text-[#D6BB93] transition-colors">${cert.title}</h4>
        <div class="text-xs font-semibold text-[#C9AB7D] mb-2 font-mono">${cert.issuer}</div>
        <p class="text-xs text-[#A89576] leading-relaxed mb-3">${cert.description}</p>
        <a href="${cert.verifyUrl}" class="inline-flex items-center gap-1.5 text-xs font-mono text-[#D6BB93] hover:underline" title="Verify Certificate [ADD LINK]">
          <span>View Certificate</span>
          <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
        </a>
      </div>
    `)
    .join('');
}

function renderAchievements(achievements) {
  const container = document.getElementById('achievements-grid-container');
  if (!container || !achievements) return;

  container.innerHTML = achievements
    .map((ach, idx) => `
      <div class="glass-card p-6 relative group transition-all duration-300 scroll-zoom-item stagger-${(idx % 4) + 1}">
        <div class="flex items-center justify-between mb-4">
          <div class="w-11 h-11 rounded-xl bg-[#161410] border border-[#62451F] flex items-center justify-center text-[#D6BB93] group-hover:scale-110 transition-transform">
            <i data-lucide="${ach.icon}" class="w-5 h-5 text-[#C9AB7D]"></i>
          </div>
          <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#161410] text-[#D6BB93] border border-[#62451F]">${ach.badge}</span>
        </div>
        <h3 class="text-xl font-bold text-[#E8DCC8] font-display mb-1 group-hover:text-[#D6BB93] transition-colors">${ach.title}</h3>
        <h4 class="text-xs font-medium text-[#A89576] mb-3 font-mono">${ach.subtitle}</h4>
        <p class="text-xs text-[#E8DCC8] opacity-90 leading-relaxed">${ach.description}</p>
      </div>
    `)
    .join('');
}

/* =========================================================
   DSA & CODE SNIPPET TABS
   ========================================================= */
function renderDsaSection(dsaData) {
  if (!dsaData) return;

  const topicsContainer = document.getElementById('dsa-topics-container');
  if (topicsContainer && dsaData.topicProgress) {
    topicsContainer.innerHTML = dsaData.topicProgress
      .map((t, idx) => `
        <div class="flex items-center justify-between p-3 rounded-lg bg-[#161410] border border-[#62451F] hover:border-[#C9AB7D] transition-all hover:scale-[1.02] scroll-zoom-item stagger-${(idx % 3) + 1}">
          <span class="text-xs font-medium text-[#E8DCC8] flex items-center gap-2">
            <i data-lucide="${t.icon}" class="w-4 h-4 text-[#C9AB7D]"></i>
            ${t.name}
          </span>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full font-mono bg-[#070604] text-[#D6BB93] border border-[#62451F]">${t.status}</span>
        </div>
      `)
      .join('');
  }

  const tabsContainer = document.getElementById('dsa-code-tabs');
  const codeBox = document.getElementById('dsa-code-display');
  const codeTitle = document.getElementById('dsa-snippet-title');
  const codeComplexity = document.getElementById('dsa-snippet-complexity');
  const copyBtn = document.getElementById('dsa-copy-btn');

  if (!tabsContainer || !codeBox || !dsaData.codeSnippets) return;

  const snippets = dsaData.codeSnippets;

  function loadSnippet(index) {
    const s = snippets[index];
    if (codeTitle) codeTitle.textContent = s.title;
    if (codeComplexity) codeComplexity.textContent = s.complexity;
    if (codeBox) {
      codeBox.textContent = s.code;
      codeBox.classList.remove('tab-zoom-pop');
      void codeBox.offsetWidth;
      codeBox.classList.add('tab-zoom-pop');
    }

    const allTabs = tabsContainer.querySelectorAll('button');
    allTabs.forEach((b, i) => {
      if (i === index) {
        b.className = "code-tab active px-4 py-2 text-xs font-mono text-[#D6BB93] font-bold border-b-2 border-[#C9AB7D] bg-[#161410] transition-all";
      } else {
        b.className = "code-tab px-4 py-2 text-xs font-mono text-[#A89576] hover:text-[#E8DCC8] border-b-2 border-transparent transition-all";
      }
    });
  }

  tabsContainer.innerHTML = '';
  snippets.forEach((s, idx) => {
    const tabBtn = document.createElement('button');
    tabBtn.textContent = s.tabName;
    tabBtn.addEventListener('click', () => loadSnippet(idx));
    tabsContainer.appendChild(tabBtn);
  });

  loadSnippet(0);

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeText = codeBox.textContent;
      navigator.clipboard.writeText(codeText).then(() => {
        showToast("Code Snippet copied to clipboard!");
        copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-[#D6BB93]"></i> Copied!';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4 text-[#A89576]"></i> Copy Code';
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
      });
    });
  }
}

/* =========================================================
   CONNECT WITH ME (CONTACT FORM & TOAST)
   ========================================================= */
function initContactForm(contactData) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in your name, email, and message.");
      return;
    }

    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoUrl;

    showToast("Thank you, " + name + "! Opening your mail client to send message.");
    form.reset();
  });

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(contactData.email).then(() => {
        showToast("Email address copied to clipboard!");
      });
    });
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast-container');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-container';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="px-5 py-3.5 rounded-2xl border border-[#C9AB7D] bg-[#161410] text-[#E8DCC8] shadow-2xl flex items-center gap-3 text-sm font-semibold">
      <i data-lucide="check-circle" class="w-5 h-5 text-[#D6BB93] shrink-0"></i>
      <span>${message}</span>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* =========================================================
   CUSTOMIZATION GUIDE MODAL HELPER
   ========================================================= */
function initCustomizationGuideModal() {
  const openBtn = document.getElementById('open-guide-modal-btn');
  const closeBtn = document.getElementById('close-guide-modal-btn');
  const modal = document.getElementById('customization-modal');

  if (!modal) return;

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
