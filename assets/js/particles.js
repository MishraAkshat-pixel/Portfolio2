/**
 * BACKGROUND PARTICLES CONSTELLATION
 * Luxury Gold & Obsidian Palette with Scroll Velocity Physics
 */
(function () {
  const canvas = document.getElementById('bg-particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 110 };
  let animationId;
  let scrollY = window.scrollY;
  let scrollSpeed = 0;
  let lastScrollTime = Date.now();

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.documentElement.scrollHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 26000), 100);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.6,
        color: Math.random() > 0.5 ? 'rgba(201, 171, 125,' : 'rgba(214, 187, 147,'
      });
    }
  }

  window.addEventListener('scroll', () => {
    const now = Date.now();
    const dt = Math.max(now - lastScrollTime, 1);
    const newScrollY = window.scrollY;
    const dy = newScrollY - scrollY;
    scrollSpeed = dy / dt;
    scrollY = newScrollY;
    lastScrollTime = now;
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    scrollSpeed *= 0.92;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy - scrollSpeed * 1.2;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0 && dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 1.8;
          p.y += (dy / dist) * force * 1.8;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.75)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          const opacity = (1 - dist / 115) * 0.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = 'rgba(201, 171, 125, ' + opacity + ')';
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }
    }
    animationId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animationId);
    else draw();
  });

  setTimeout(() => {
    resize();
    draw();
  }, 200);
})();
