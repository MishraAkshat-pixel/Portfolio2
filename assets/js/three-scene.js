/**
 * THREE.JS 3D AI NEURAL CORE VISUALIZATION
 * Luxury Gold & Obsidian Palette with Dynamic Scroll Zoom & Rotation
 */
(function () {
  const container = document.getElementById('hero-3d-canvas-container');
  if (!container) return;

  if (typeof THREE === 'undefined') {
    renderFallbackCanvas(container);
    return;
  }

  try {
    let scene, camera, renderer;
    let coreGroup, outerIcosahedron, innerSphere, ring1, ring2, particlesMesh;
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;
    let scrollRotationZ = 0;
    let scrollScaleMultiplier = 1;
    let animationFrameId;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.z = 7;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.id = 'three-canvas';
      renderer.domElement.setAttribute('aria-hidden', 'true');
      container.appendChild(renderer.domElement);

      coreGroup = new THREE.Group();
      scene.add(coreGroup);

      const icoGeometry = new THREE.IcosahedronGeometry(2.1, 1);
      const icoMaterial = new THREE.MeshBasicMaterial({ color: 0xC9AB7D, wireframe: true, transparent: true, opacity: 0.6 });
      outerIcosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
      coreGroup.add(outerIcosahedron);

      const icoVertices = icoGeometry.attributes.position.array;
      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(icoVertices, 3));
      const pointMaterial = new THREE.PointsMaterial({ color: 0xD6BB93, size: 0.12, transparent: true, opacity: 0.95 });
      const vertexPoints = new THREE.Points(pointGeometry, pointMaterial);
      outerIcosahedron.add(vertexPoints);

      const sphereGeometry = new THREE.SphereGeometry(1.1, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x62451F, wireframe: true, transparent: true, opacity: 0.55 });
      innerSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      coreGroup.add(innerSphere);

      const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xC9AB7D, transparent: true, opacity: 0.65 });
      ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      coreGroup.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xD6BB93, transparent: true, opacity: 0.5 });
      ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.z = Math.PI / 5;
      coreGroup.add(ring2);

      const particleCount = 120;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const radius = 2.4 + Math.random() * 1.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[i + 2] = radius * Math.cos(phi);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({ color: 0xD6BB93, size: 0.06, transparent: true, opacity: 0.8 });
      particlesMesh = new THREE.Points(particleGeo, particleMat);
      coreGroup.add(particlesMesh);

      scene.add(new THREE.AmbientLight(0xE8DCC8, 0.8));

      window.addEventListener('resize', onWindowResize, false);
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(animationFrameId);
        else animate();
      });

      animate();
    }

    function onWindowResize() {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function onMouseMove(event) {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    }

    function onScroll() {
      const scrollY = window.scrollY;
      scrollRotationZ = scrollY * 0.002;
      scrollScaleMultiplier = Math.max(0.85, 1 - (scrollY * 0.0003));
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      outerIcosahedron.rotation.x += 0.003;
      outerIcosahedron.rotation.y += 0.004;
      innerSphere.rotation.x -= 0.004;
      innerSphere.rotation.y += 0.003;
      ring1.rotation.z += 0.005 + scrollRotationZ * 0.01;
      ring2.rotation.z -= 0.004 + scrollRotationZ * 0.01;
      particlesMesh.rotation.y += 0.0015;
      particlesMesh.rotation.x -= 0.001;

      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;
      coreGroup.rotation.y = targetRotationY * 0.8;
      coreGroup.rotation.x = targetRotationX * 0.8 + scrollRotationZ;

      const time = Date.now() * 0.0015;
      const breathingScale = (1 + Math.sin(time) * 0.03) * scrollScaleMultiplier;
      innerSphere.scale.set(breathingScale, breathingScale, breathingScale);
      renderer.render(scene, camera);
    }

    init();
  } catch (error) {
    console.warn('Three.js initialization fallback:', error);
    renderFallbackCanvas(container);
  }

  function renderFallbackCanvas(parent) {
    if (parent.querySelector('canvas')) return;
    const canvas = document.createElement('canvas');
    canvas.width = parent.clientWidth || 400;
    canvas.height = parent.clientHeight || 400;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    parent.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = Math.min(cx, cy) * 0.6;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.strokeStyle = 'rgba(201, 171, 125, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(214, 187, 147, 0.35)';
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.1, r * 0.6, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();
      const grad = ctx.createRadialGradient(0, 0, 5, 0, 0, r * 0.5);
      grad.addColorStop(0, '#D6BB93');
      grad.addColorStop(1, 'rgba(98, 69, 31, 0.2)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      angle += 0.01;
      requestAnimationFrame(draw);
    }
    draw();
  }
})();
