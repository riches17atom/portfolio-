/**
 * ============================================================================
 * RICHES THAPA — PORTFOLIO MAIN INTERACTIVE APPLICATION ENGINE
 * Controls: Technologies Grid, CI/CD Pipeline Inspector, AWS Visualizer,
 * Kubernetes Explorer, Terraform Stepper, Projects Grid, DevOps Lab Terminal,
 * Portfolio AI Chatbot with Section Auto-Scroll, and Contact Form.
 * ============================================================================
 */

(function () {
  'use strict';

  // Ensure PORTFOLIO_DATA is available
  const DATA = window.PORTFOLIO_DATA || {};

  // ==========================================================================
  // 01. TECHNOLOGIES & TOOLS GRID (8 CATEGORIES)
  // ==========================================================================
  function initTechGrid() {
    const grid = document.getElementById('tech-grid');
    const filterBtns = document.querySelectorAll('.tech-pill');
    if (!grid || !DATA.skillsCategories) return;

    function renderCards(filter = 'all') {
      grid.innerHTML = '';
      DATA.skillsCategories.forEach((cat) => {
        if (filter !== 'all' && cat.id !== filter) return;

        cat.skills.forEach((skill) => {
          const card = document.createElement('div');
          card.className = 'tech-card glass-panel';
          card.setAttribute('data-category', cat.id);

          card.innerHTML = `
            <div class="tc-top">
              <h3 class="tc-name">${skill.name}</h3>
              <span class="tc-cat-badge">${cat.name}</span>
            </div>
            <p class="tc-desc">${skill.description}</p>
            <div class="tc-usecase">
              <span class="tc-uc-lbl">DevOps Use Case</span>
              <span class="tc-uc-val">${skill.useCase}</span>
            </div>
          `;
          grid.appendChild(card);
        });
      });
    }

    renderCards('all');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderCards(filter);
      });
    });
  }

  // ==========================================================================
  // 02. DEVOPS CI/CD PIPELINE INTERACTIVE STAGES
  // ==========================================================================
  let currentStageIdx = 0;

  function initPipeline() {
    const stagesContainer = document.getElementById('pipeline-stages');
    const detailIcon = document.getElementById('detail-stage-icon');
    const detailNum = document.getElementById('detail-stage-num');
    const detailName = document.getElementById('detail-stage-name');
    const detailDesc = document.getElementById('detail-stage-desc');
    const prevBtn = document.getElementById('prev-stage-btn');
    const nextBtn = document.getElementById('next-stage-btn');

    if (!stagesContainer || !DATA.pipelineStages) return;

    stagesContainer.innerHTML = '';

    DATA.pipelineStages.forEach((stage, idx) => {
      const node = document.createElement('div');
      node.className = `pipeline-node ${idx === 0 ? 'active' : ''}`;
      node.setAttribute('data-idx', idx);

      node.innerHTML = `
        <div class="p-node-circle">${stage.icon}</div>
        <span class="p-node-name">${stage.name}</span>
      `;

      node.addEventListener('click', () => selectStage(idx));
      stagesContainer.appendChild(node);

      if (idx < DATA.pipelineStages.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'p-node-arrow';
        arrow.innerHTML = '&rarr;';
        stagesContainer.appendChild(arrow);
      }
    });

    function selectStage(idx) {
      currentStageIdx = idx;
      const allNodes = stagesContainer.querySelectorAll('.pipeline-node');
      allNodes.forEach((n, i) => {
        if (i === idx) n.classList.add('active');
        else n.classList.remove('active');
      });

      const s = DATA.pipelineStages[idx];
      if (detailIcon) detailIcon.textContent = s.icon;
      if (detailNum) detailNum.textContent = `STAGE ${String(s.id).padStart(2, '0')} OF ${DATA.pipelineStages.length}`;
      if (detailName) detailName.textContent = s.name;
      if (detailDesc) detailDesc.textContent = s.desc;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const newIdx = currentStageIdx > 0 ? currentStageIdx - 1 : DATA.pipelineStages.length - 1;
        selectStage(newIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const newIdx = (currentStageIdx + 1) % DATA.pipelineStages.length;
        selectStage(newIdx);
      });
    }
  }

  // ==========================================================================
  // 03. AWS CLOUD ARCHITECTURE INSPECTOR
  // ==========================================================================
  function initAwsInspector() {
    const inspector = document.getElementById('aws-inspector');
    const inspectableNodes = document.querySelectorAll('.arch-node, .support-node');

    if (!inspector) return;

    inspectableNodes.forEach((node) => {
      const info = node.getAttribute('data-info');
      const name = node.querySelector('.node-name, .s-title')?.textContent || 'AWS Component';

      node.addEventListener('mouseenter', () => {
        inspector.innerHTML = `<strong>${name}:</strong> ${info}`;
      });

      node.addEventListener('click', () => {
        inspector.innerHTML = `<strong>${name}:</strong> ${info}`;
        node.style.boxShadow = '0 0 20px rgba(0, 242, 254, 0.6)';
        setTimeout(() => { node.style.boxShadow = ''; }, 1200);
      });
    });
  }

  // ==========================================================================
  // 04. KUBERNETES EXPLORER MODAL
  // ==========================================================================
  function initK8sModal() {
    const openBtn = document.getElementById('explore-k8s-btn');
    const modal = document.getElementById('k8s-modal');
    const closeBtn = document.getElementById('k8s-modal-close');
    const backdrop = document.getElementById('k8s-modal-backdrop');

    if (!modal) return;

    function openModal() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
  }

  // ==========================================================================
  // 05. TERRAFORM STEPPER
  // ==========================================================================
  function initTerraformStepper() {
    const stepCards = document.querySelectorAll('.tf-step-card');
    stepCards.forEach((card) => {
      card.addEventListener('click', () => {
        stepCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }

  // ==========================================================================
  // 06. PROJECTS GRID (REAL GITHUB REPOSITORIES)
  // ==========================================================================
  function initProjects() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.p-filter-btn');

    if (!grid || !DATA.projects) return;

    function renderProjects(filter = 'All') {
      grid.innerHTML = '';
      DATA.projects.forEach((proj) => {
        if (filter !== 'All' && !proj.category.includes(filter)) return;

        const card = document.createElement('div');
        card.className = 'project-card glass-panel';

        const techPills = proj.tech.map((t) => `<span class="pc-tech-pill">${t}</span>`).join('');

        card.innerHTML = `
          <div>
            <div class="pc-top">
              <span class="pc-repo-icon">📦</span>
              <span class="pc-badge">${proj.category[0] || 'DevOps'}</span>
            </div>
            <h3 class="pc-title">${proj.name}</h3>
            <p class="pc-desc">${proj.description}</p>
            <div class="pc-tech-row">${techPills}</div>
          </div>
          <div class="pc-action">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>View on GitHub</span>
            </a>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    renderProjects('All');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
      });
    });
  }

  // ==========================================================================
  // 07. DEVOPS LAB / INTERACTIVE TERMINAL
  // ==========================================================================
  function initLabTerminal() {
    const output = document.getElementById('lab-terminal-output');
    const input = document.getElementById('lab-terminal-input');
    const presetBtns = document.querySelectorAll('.t-preset-btn');

    if (!output) return;

    function appendLine(text, isCommand = false) {
      const line = document.createElement('div');
      line.className = isCommand ? 't-log-line' : 't-log-line';
      if (isCommand) {
        line.innerHTML = `<span class="c-cyan">riches@devops-lab:~$</span> ${escapeHtml(text)}`;
      } else {
        line.textContent = text;
      }
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }

    function runCommand(raw) {
      const cmd = raw.trim();
      if (!cmd) return;

      appendLine(cmd, true);

      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      // Check presets
      const matched = DATA.terminalPresets?.find((p) => p.cmd === cmd);
      if (matched) {
        appendLine(matched.output);
        return;
      }

      // Custom basic commands
      switch (cmd.toLowerCase()) {
        case 'help':
          appendLine(`Available commands:
  kubectl get nodes
  kubectl get pods -A
  docker ps
  terraform plan
  git status
  aws ec2 describe-instances
  whoami
  clear`);
          break;
        case 'whoami':
          appendLine("Riches Thapa &bull; DevOps Engineer | Cloud & Automation Enthusiast");
          break;
        case 'date':
          appendLine(new Date().toUTCString());
          break;
        case 'uptime':
          appendLine("32 days, 14 hours, 10 min. Load average: 0.08, 0.04, 0.01");
          break;
        default:
          appendLine(`bash: ${cmd}: command not found. Click preset buttons above or type 'help'.`);
          break;
      }
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = input.value;
          input.value = '';
          runCommand(val);
        }
      });
    }

    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) runCommand(cmd);
      });
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  // ==========================================================================
  // 08. PORTFOLIO AI CHATBOT (Ask Riches' Portfolio AI)
  // ==========================================================================
  function initChatbot() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const windowEl = document.getElementById('chatbot-window');
    const messagesEl = document.getElementById('chatbot-messages');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const suggChips = document.querySelectorAll('.sugg-chip');

    if (!windowEl || !DATA.chatbotKnowledge) return;

    toggleBtn?.addEventListener('click', () => {
      windowEl.classList.toggle('open');
      if (windowEl.classList.contains('open')) {
        input?.focus();
      }
    });

    closeBtn?.addEventListener('click', () => {
      windowEl.classList.remove('open');
    });

    function addMessage(text, isUser = false) {
      const msg = document.createElement('div');
      msg.className = `chat-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
      msg.textContent = text;
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function processQuery(query) {
      const clean = query.toLowerCase().trim();
      if (!clean) return;

      addMessage(query, true);

      // Search knowledge base
      let bestMatch = null;
      for (const item of DATA.chatbotKnowledge) {
        if (item.keywords.some((k) => clean.includes(k))) {
          bestMatch = item;
          break;
        }
      }

      setTimeout(() => {
        if (bestMatch) {
          addMessage(bestMatch.response, false);

          // If the question involves section navigation, smoothly scroll user there
          if (bestMatch.actionTarget) {
            const targetEl = document.querySelector(bestMatch.actionTarget);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        } else {
          // Strict Guardrail: Do not fabricate experience
          addMessage("I don't have that information in Riches' portfolio yet. You can contact Riches directly via email at richesthapa999@gmail.com or by phone at +977 9762281647.", false);
        }
      }, 400);
    }

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value;
      input.value = '';
      processQuery(val);
    });

    suggChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-q') || chip.textContent;
        processQuery(q);
      });
    });
  }

  // ==========================================================================
  // 09. CONTACT FORM VALIDATION
  // ==========================================================================
  function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    const feedback = document.getElementById('c-feedback');
    const submitBtn = document.getElementById('c-submit-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name')?.value.trim();
      const email = document.getElementById('c-email')?.value.trim();
      const message = document.getElementById('c-message')?.value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      // Simulated sending feedback without exposing private keys
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }

      setTimeout(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.textContent = `Thank you, ${name}! Your message has been prepared for Riches Thapa.`;
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span>`;
        }
      }, 900);
    });
  }

  // ==========================================================================
  // 10. STICKY NAV & ACTIVE LINK SPY
  // ==========================================================================
  function initNav() {
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.pageYOffset + 140;

      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          current = sec.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    mobileBtn?.addEventListener('click', () => {
      drawer?.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach((l) => {
      l.addEventListener('click', () => {
        drawer?.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // INITIALIZE EVERYTHING ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTechGrid();
    initPipeline();
    initAwsInspector();
    initK8sModal();
    initTerraformStepper();
    initProjects();
    initLabTerminal();
    initChatbot();
    initContactForm();
    initNav();
  });

})();
