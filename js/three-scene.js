/**
 * ============================================================================
 * RICHES THAPA — 3D SCENE & INTERACTIVE KNOWLEDGE MAP (THREE.JS)
 * Realistic Cloud/DevOps Hero Scene (Server Racks, Data Packets, Floating Nodes)
 * + 3D Interactive Skills Network Map
 * ============================================================================
 */

(function () {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  // ==========================================================================
  // 01. HERO 3D SCENE: REALISTIC DEVOPS CLOUD & SERVER ENVIRONMENT
  // ==========================================================================
  let heroScene, heroCamera, heroRenderer;
  let serverRacks = [];
  let floatingNodes = [];
  let dataPackets = [];
  let networkLines;
  let heroParticles;
  let heroMouseX = 0, heroMouseY = 0;
  let heroTargetX = 0, heroTargetY = 0;
  let heroCanvas = document.getElementById('hero-3d-canvas');

  function initHero3D() {
    if (!heroCanvas || typeof THREE === 'undefined') return;

    const width = heroCanvas.clientWidth || window.innerWidth;
    const height = heroCanvas.clientHeight || window.innerHeight;

    heroScene = new THREE.Scene();
    heroScene.fog = new THREE.FogExp2(0x050914, 0.0016);

    heroCamera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
    heroCamera.position.set(0, 40, 420);

    heroRenderer = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    heroRenderer.setSize(width, height);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0x0e1c38, 2.5);
    heroScene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3, 600);
    cyanLight.position.set(-150, 180, 200);
    heroScene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 600);
    purpleLight.position.set(200, -100, 150);
    heroScene.add(purpleLight);

    // Build Server Racks
    createServerRacks();

    // Floating Infrastructure Nodes (Kubernetes / Cloud / Containers)
    createFloatingInfrastructure();

    // Data Packets traveling along network cables
    createDataPacketNetwork();

    // Ambient Cloud Particles
    createHeroParticles();

    window.addEventListener('resize', onHeroResize);
    window.addEventListener('mousemove', onHeroMouseMove);

    animateHero();
  }

  function createServerRacks() {
    const rackGeo = new THREE.BoxGeometry(45, 120, 30);
    const rackMat = new THREE.MeshStandardMaterial({
      color: 0x0a1224,
      roughness: 0.7,
      metalness: 0.8
    });

    const rackPositions = [
      { x: -220, y: -40, z: -80, rotY: 0.35 },
      { x: -160, y: -50, z: -150, rotY: 0.4 },
      { x: 220, y: -40, z: -80, rotY: -0.35 },
      { x: 160, y: -50, z: -150, rotY: -0.4 }
    ];

    rackPositions.forEach((pos, idx) => {
      const rackGroup = new THREE.Group();
      const mainFrame = new THREE.Mesh(rackGeo, rackMat);
      rackGroup.add(mainFrame);

      // Edge wireframe highlight
      const edgeGeo = new THREE.EdgesGeometry(rackGeo);
      const edgeMat = new THREE.LineBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.3 });
      const wireframe = new THREE.LineSegments(edgeGeo, edgeMat);
      rackGroup.add(wireframe);

      // Server Blade Units with Blinking LEDs
      const bladeGeo = new THREE.BoxGeometry(41, 6, 28);
      const ledGeo = new THREE.BoxGeometry(1.5, 1.5, 1);

      for (let b = 0; b < 10; b++) {
        const bladeMat = new THREE.MeshBasicMaterial({ color: 0x0f1b33 });
        const blade = new THREE.Mesh(bladeGeo, bladeMat);
        blade.position.set(0, -45 + b * 10, 1);
        rackGroup.add(blade);

        // Green & Cyan Activity LEDs
        const ledCount = 4;
        for (let l = 0; l < ledCount; l++) {
          const isWarning = Math.random() > 0.85;
          const ledMat = new THREE.MeshBasicMaterial({
            color: isWarning ? 0xf59e0b : (l % 2 === 0 ? 0x00f2fe : 0x10b981)
          });
          const led = new THREE.Mesh(ledGeo, ledMat);
          led.position.set(-14 + l * 7, -45 + b * 10, 15.5);
          led.userData = {
            baseColor: ledMat.color.clone(),
            pulseSpeed: 1 + Math.random() * 3,
            phase: Math.random() * Math.PI * 2
          };
          rackGroup.add(led);
        }
      }

      rackGroup.position.set(pos.x, pos.y, pos.z);
      rackGroup.rotation.y = pos.rotY;
      heroScene.add(rackGroup);
      serverRacks.push(rackGroup);
    });
  }

  function createFloatingInfrastructure() {
    // 3D Docker / Kubernetes Node Modules
    const nodeGeo = new THREE.IcosahedronGeometry(18, 1);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x0c1e3d,
      wireframe: true,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.4
    });

    const positions = [
      { x: -90, y: 70, z: 20, speed: 0.008, label: 'K8S' },
      { x: 90, y: 80, z: 30, speed: -0.007, label: 'AWS' },
      { x: 0, y: 130, z: -40, speed: 0.005, label: 'IAC' },
      { x: -140, y: -20, z: 60, speed: 0.006, label: 'CI/CD' },
      { x: 140, y: -20, z: 60, speed: -0.006, label: 'DOCKER' }
    ];

    positions.forEach((p) => {
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      group.add(mesh);

      // Core point light inside floating node
      const point = new THREE.PointLight(0x00f2fe, 1.2, 80);
      group.add(point);

      group.position.set(p.x, p.y, p.z);
      group.userData = {
        baseY: p.y,
        speed: p.speed,
        timeOffset: Math.random() * 10
      };
      heroScene.add(group);
      floatingNodes.push(group);
    });
  }

  function createDataPacketNetwork() {
    // Interconnecting glowing lines between nodes and servers
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.35
    });

    const points = [];
    points.push(new THREE.Vector3(-220, 20, -80));
    points.push(new THREE.Vector3(-90, 70, 20));
    points.push(new THREE.Vector3(0, 130, -40));
    points.push(new THREE.Vector3(90, 80, 30));
    points.push(new THREE.Vector3(220, 20, -80));

    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    networkLines = new THREE.Line(lineGeo, lineMat);
    heroScene.add(networkLines);

    // Dynamic Packets moving along spline
    const curve = new THREE.CatmullRomCurve3(points);
    const packetGeo = new THREE.SphereGeometry(2.5, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });

    for (let p = 0; p < (isMobile ? 3 : 7); p++) {
      const packet = new THREE.Mesh(packetGeo, packetMat);
      packet.userData = {
        curve: curve,
        progress: p * (1 / 7),
        speed: 0.003 + Math.random() * 0.002
      };
      heroScene.add(packet);
      dataPackets.push(packet);
    }
  }

  function createHeroParticles() {
    const pCount = isMobile ? 120 : 380;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 1000;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2.5,
      transparent: true,
      opacity: 0.45
    });

    heroParticles = new THREE.Points(pGeo, pMat);
    heroScene.add(heroParticles);
  }

  function onHeroResize() {
    if (!heroCamera || !heroRenderer || !heroCanvas) return;
    const width = heroCanvas.clientWidth || window.innerWidth;
    const height = heroCanvas.clientHeight || window.innerHeight;
    heroCamera.aspect = width / height;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(width, height);
  }

  function onHeroMouseMove(e) {
    heroMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
    heroMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
  }

  function animateHero() {
    requestAnimationFrame(animateHero);

    if (prefersReducedMotion) {
      heroRenderer.render(heroScene, heroCamera);
      return;
    }

    const time = Date.now() * 0.0015;

    // Smooth Parallax
    heroTargetX += (heroMouseX - heroTargetX) * 0.04;
    heroTargetY += (heroMouseY - heroTargetY) * 0.04;

    heroCamera.position.x = heroTargetX;
    heroCamera.position.y = 40 - heroTargetY;
    heroCamera.lookAt(0, 30, 0);

    // Floating Nodes Motion
    floatingNodes.forEach((node) => {
      node.rotation.x += node.userData.speed;
      node.rotation.y += node.userData.speed * 1.3;
      node.position.y = node.userData.baseY + Math.sin(time + node.userData.timeOffset) * 8;
    });

    // Animate Server LED Blink
    serverRacks.forEach((rack) => {
      rack.children.forEach((child) => {
        if (child.userData && child.userData.pulseSpeed) {
          const brightness = Math.sin(time * child.userData.pulseSpeed + child.userData.phase);
          child.material.opacity = brightness > 0 ? 1 : 0.2;
          child.material.transparent = true;
        }
      });
    });

    // Move Data Packets
    dataPackets.forEach((pkt) => {
      pkt.userData.progress += pkt.userData.speed;
      if (pkt.userData.progress > 1) pkt.userData.progress = 0;
      const pt = pkt.userData.curve.getPoint(pkt.userData.progress);
      pkt.position.copy(pt);
    });

    // Subtle particle drift
    if (heroParticles) {
      heroParticles.rotation.y += 0.0004;
    }

    heroRenderer.render(heroScene, heroCamera);
  }

  // ==========================================================================
  // 02. INTERACTIVE 3D SKILLS & KNOWLEDGE NETWORK MAP
  // ==========================================================================
  let skillsScene, skillsCamera, skillsRenderer;
  let skillsNodes = [];
  let skillsLines;
  let skillsCanvas = document.getElementById('skills-3d-canvas');
  let isDragging = false;
  let prevMouseX = 0, prevMouseY = 0;
  let rotX = 0, rotY = 0;

  function initSkills3D() {
    if (!skillsCanvas || typeof THREE === 'undefined') return;

    const width = skillsCanvas.clientWidth || 800;
    const height = skillsCanvas.clientHeight || 500;

    skillsScene = new THREE.Scene();
    skillsCamera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    skillsCamera.position.z = 320;

    skillsRenderer = new THREE.WebGLRenderer({
      canvas: skillsCanvas,
      alpha: true,
      antialias: true
    });
    skillsRenderer.setSize(width, height);
    skillsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Center Node: RICHES THAPA
    const centerGeo = new THREE.SphereGeometry(18, 24, 24);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.6,
      roughness: 0.2
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    skillsScene.add(centerMesh);

    // Center Label Canvas Texture
    const centerLabel = createTextSprite("RICHES THAPA", "#00f2fe", 24);
    centerLabel.position.set(0, 28, 0);
    skillsScene.add(centerLabel);

    // Orbiting Technology Nodes
    const techList = [
      "DevOps", "Cloud", "AWS", "Linux", "Docker", "Kubernetes",
      "Terraform", "CI/CD", "Networking", "Automation", "Git", "Virtualization"
    ];

    const radius = 130;
    const nodeGeo = new THREE.SphereGeometry(9, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });

    const linePoints = [];

    techList.forEach((tech, i) => {
      const phi = Math.acos(-1 + (2 * i) / techList.length);
      const theta = Math.sqrt(techList.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const mesh = new THREE.Mesh(nodeGeo, nodeMat.clone());
      mesh.position.set(x, y, z);
      mesh.userData = { name: tech, basePos: new THREE.Vector3(x, y, z) };
      skillsScene.add(mesh);
      skillsNodes.push(mesh);

      // Label sprite
      const sprite = createTextSprite(tech, "#cbd5e1", 16);
      sprite.position.set(x, y + 14, z);
      skillsScene.add(sprite);
      mesh.userData.sprite = sprite;

      // Connecting line back to center
      linePoints.push(new THREE.Vector3(0, 0, 0));
      linePoints.push(new THREE.Vector3(x, y, z));
    });

    // Connecting Lines
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.3
    });
    skillsLines = new THREE.LineSegments(lineGeo, lineMaterial);
    skillsScene.add(skillsLines);

    // Ambient Lighting
    const amb = new THREE.AmbientLight(0xffffff, 1.2);
    skillsScene.add(amb);
    const point = new THREE.PointLight(0x00f2fe, 2, 400);
    skillsScene.add(point);

    // Interactive Drag rotation handlers
    skillsCanvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      rotY += dx * 0.008;
      rotX += dy * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('resize', onSkillsResize);
    animateSkills();
  }

  function createTextSprite(message, color = '#ffffff', fontSize = 18) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.font = `bold ${fontSize * 2}px 'Fira Code', monospace`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(40, 10, 1);
    return sprite;
  }

  function onSkillsResize() {
    if (!skillsCamera || !skillsRenderer || !skillsCanvas) return;
    const width = skillsCanvas.clientWidth || 800;
    const height = skillsCanvas.clientHeight || 500;
    skillsCamera.aspect = width / height;
    skillsCamera.updateProjectionMatrix();
    skillsRenderer.setSize(width, height);
  }

  function animateSkills() {
    requestAnimationFrame(animateSkills);

    if (!isDragging && !prefersReducedMotion) {
      rotY += 0.003;
    }

    skillsScene.rotation.y = rotY;
    skillsScene.rotation.x = rotX;

    skillsRenderer.render(skillsScene, skillsCamera);
  }

  // ==========================================================================
  // INITIALIZATION ON DOM LOAD
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initHero3D();
    initSkills3D();
  });

})();
