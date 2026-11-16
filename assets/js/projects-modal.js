/* ==========================================================================
   PROJECTS MODALS & INTERACTIVE LIVE DEMOS
   Architecture Diagram Modal & Interactive Project Mini-Utilities
   ========================================================================== */
(function() {
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalTitle = document.getElementById('modal-title-text');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop || !modalCloseBtn) return;

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal(title, contentHtml) {
    modalTitle.innerHTML = title;
    modalBody.innerHTML = contentHtml;
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  // 1. BRAIN-LOCK ARCHITECTURE MODAL
  const archTrigger = document.getElementById('btn-arch-brainlock');
  if (archTrigger) {
    archTrigger.addEventListener('click', () => {
      const content = `
        <div class="arch-diagram-wrap">
          <div style="background: rgba(0, 240, 255, 0.06); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 12px; padding: 1.25rem; margin-bottom: 0.5rem;">
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--neon-cyan); font-weight: 700; margin-bottom: 0.4rem;">
              BRAIN-LOCK FULL-STACK PIPELINE & AI MALPRACTICE VERIFICATION
            </div>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6;">
              End-to-end telemetry system verifying user presence and enforcing browser integrity during high-stakes assessments.
            </p>
          </div>

          <div class="arch-flow-row">
            <div class="arch-node">
              <span class="arch-node-title text-cyan">1. CLIENT LAYER</span>
              <span class="arch-node-sub">Flutter App (Mobile) & React/HTML Web Portal</span>
              <div style="font-size: 0.75rem; color: #94A3B8; margin-top: 0.5rem;">
                • WebRTC Camera Stream<br>
                • Window Blur Detection<br>
                • Tab Switch Listeners
              </div>
            </div>

            <div class="arch-node">
              <span class="arch-node-title text-purple">2. API GATEWAY</span>
              <span class="arch-node-sub">Django REST Framework (Python)</span>
              <div style="font-size: 0.75rem; color: #94A3B8; margin-top: 0.5rem;">
                • JWT Authentication<br>
                • Exam State Sessions<br>
                • Event Telemetry Ingestion
              </div>
            </div>

            <div class="arch-node highlight-ai">
              <span class="arch-node-title text-cyan">⚡ 3. AI MALPRACTICE ENGINE</span>
              <span class="arch-node-sub">OpenCV & Pretrained Face Verification</span>
              <div style="font-size: 0.75rem; color: #A7F3D0; margin-top: 0.5rem;">
                • Real-time Face Tracking<br>
                • Multi-Face / Absence Alerts<br>
                • Automated Flagging Logs
              </div>
            </div>

            <div class="arch-node">
              <span class="arch-node-title text-magenta">4. PERSISTENCE</span>
              <span class="arch-node-sub">PostgreSQL / SQLite</span>
              <div style="font-size: 0.75rem; color: #94A3B8; margin-top: 0.5rem;">
                • Incident Audit Trail<br>
                • Candidate Scores<br>
                • Proctor Analytics
              </div>
            </div>
          </div>

          <div style="margin-top: 1.25rem; padding: 1rem; background: rgba(14, 11, 26, 0.9); border: 1px dashed rgba(168, 85, 247, 0.35); border-radius: 10px;">
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #F3F4F6; margin-bottom: 0.3rem;">
              <span class="text-green">[✓] CORE VALUE ADDED:</span> Complete automated verification reducing invigilator overhead by over 70% while guaranteeing assessment fairness across mobile and desktop devices.
            </div>
          </div>
        </div>
      `;
      openModal('Brain-Lock Architecture Pipeline', content);
    });
  }

  // 2. FAT LOSS PLANNER MINI-CALCULATOR DEMO
  const dietDemoBtn = document.getElementById('btn-demo-diet');
  if (dietDemoBtn) {
    dietDemoBtn.addEventListener('click', () => {
      const content = `
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <p style="color: var(--text-secondary); font-size: 0.9rem;">
            Interactive live preview of the calculation engine used in the <strong>Fat Loss Diet Planner</strong>:
          </p>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div>
              <label style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-cyan);">WEIGHT (KG)</label>
              <input id="calc-weight" type="number" value="70" class="form-input" style="width: 100%; margin-top: 0.3rem;" />
            </div>
            <div>
              <label style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-cyan);">HEIGHT (CM)</label>
              <input id="calc-height" type="number" value="172" class="form-input" style="width: 100%; margin-top: 0.3rem;" />
            </div>
            <div>
              <label style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-cyan);">AGE (YEARS)</label>
              <input id="calc-age" type="number" value="21" class="form-input" style="width: 100%; margin-top: 0.3rem;" />
            </div>
            <div>
              <label style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--neon-cyan);">ACTIVITY LEVEL</label>
              <select id="calc-activity" class="form-input" style="width: 100%; margin-top: 0.3rem;">
                <option value="1.2">Sedentary (desk job)</option>
                <option value="1.375" selected>Lightly Active (1-3 days)</option>
                <option value="1.55">Moderately Active (3-5 days)</option>
                <option value="1.725">Very Active (6-7 days)</option>
              </select>
            </div>
          </div>

          <button id="btn-run-calc" class="btn-primary" style="margin-top: 0.5rem; justify-content: center;">
            <i data-lucide="zap" class="w-4 h-4"></i> CALCULATE FAT LOSS TARGETS
          </button>

          <div id="calc-result-box" style="background: rgba(10, 7, 20, 0.9); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 10px; padding: 1.2rem; display: none;">
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--neon-cyan); margin-bottom: 0.5rem;">
              [DIET_PLANNER_RESULT]
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; text-align: center;">
              <div style="background: rgba(14, 11, 26, 0.8); padding: 0.75rem; border-radius: 8px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">BMR (BASAL)</div>
                <div id="res-bmr" style="font-size: 1.25rem; font-weight: 700; color: #FFFFFF;">-</div>
              </div>
              <div style="background: rgba(14, 11, 26, 0.8); padding: 0.75rem; border-radius: 8px;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">MAINTENANCE</div>
                <div id="res-tdee" style="font-size: 1.25rem; font-weight: 700; color: var(--neon-purple);">-</div>
              </div>
              <div style="background: rgba(0, 240, 255, 0.1); border: 1px solid var(--neon-cyan); padding: 0.75rem; border-radius: 8px;">
                <div style="font-size: 0.7rem; color: var(--neon-cyan); font-family: var(--font-mono);">FAT LOSS DEFICIT</div>
                <div id="res-deficit" style="font-size: 1.25rem; font-weight: 700; color: var(--neon-cyan);">-</div>
              </div>
            </div>
          </div>
        </div>
      `;
      openModal('Fat Loss Diet Planner // Interactive Logic', content);

      const runBtn = document.getElementById('btn-run-calc');
      if (runBtn) {
        runBtn.addEventListener('click', () => {
          const w = parseFloat(document.getElementById('calc-weight').value) || 70;
          const h = parseFloat(document.getElementById('calc-height').value) || 170;
          const a = parseFloat(document.getElementById('calc-age').value) || 20;
          const act = parseFloat(document.getElementById('calc-activity').value) || 1.375;

          // Mifflin-St Jeor formula
          const bmr = Math.round(10 * w + 6.25 * h - 5 * a - 161);
          const tdee = Math.round(bmr * act);
          const deficit = Math.round(tdee - 500);

          document.getElementById('res-bmr').textContent = `${bmr} kcal`;
          document.getElementById('res-tdee').textContent = `${tdee} kcal`;
          document.getElementById('res-deficit').textContent = `${deficit} kcal`;
          document.getElementById('calc-result-box').style.display = 'block';
        });
      }
    });
  }

  // 3. SMART CALCULATOR INTERACTIVE DEMO
  const calcDemoBtn = document.getElementById('btn-demo-calc');
  if (calcDemoBtn) {
    calcDemoBtn.addEventListener('click', () => {
      const content = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
          <p style="color: var(--text-secondary); font-size: 0.9rem; width: 100%;">
            Live interactive widget representing the precision arithmetic and error handling utility:
          </p>
          <div style="width: 100%; max-width: 320px; background: #0A0714; border: 1px solid rgba(0, 240, 255, 0.4); border-radius: 14px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
            <div id="calc-screen" style="width: 100%; height: 50px; background: #05040A; border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 8px; font-family: var(--font-mono); font-size: 1.35rem; color: var(--neon-cyan); display: flex; align-items: center; justify-content: flex-end; padding: 0 1rem; margin-bottom: 1rem; overflow: hidden;">0</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;" id="calc-btn-pad">
              <button class="calc-btn" data-val="C" style="background: rgba(255, 95, 86, 0.2); color: #FF5F56;">C</button>
              <button class="calc-btn" data-val="(">(</button>
              <button class="calc-btn" data-val=")">)</button>
              <button class="calc-btn" data-val="/" style="color: var(--neon-purple); font-weight: 700;">÷</button>
              <button class="calc-btn" data-val="7">7</button>
              <button class="calc-btn" data-val="8">8</button>
              <button class="calc-btn" data-val="9">9</button>
              <button class="calc-btn" data-val="*" style="color: var(--neon-purple); font-weight: 700;">×</button>
              <button class="calc-btn" data-val="4">4</button>
              <button class="calc-btn" data-val="5">5</button>
              <button class="calc-btn" data-val="6">6</button>
              <button class="calc-btn" data-val="-" style="color: var(--neon-purple); font-weight: 700;">-</button>
              <button class="calc-btn" data-val="1">1</button>
              <button class="calc-btn" data-val="2">2</button>
              <button class="calc-btn" data-val="3">3</button>
              <button class="calc-btn" data-val="+" style="color: var(--neon-purple); font-weight: 700;">+</button>
              <button class="calc-btn" data-val="0" style="grid-column: span 2;">0</button>
              <button class="calc-btn" data-val=".">.</button>
              <button class="calc-btn" data-val="=" style="background: linear-gradient(90deg, #00F0FF, #A855F7); color: #06040D; font-weight: 800;">=</button>
            </div>
          </div>
        </div>
        <style>
          .calc-btn {
            height: 44px;
            background: rgba(22, 17, 40, 0.9);
            border: 1px solid rgba(168, 85, 247, 0.25);
            border-radius: 8px;
            color: #FFFFFF;
            font-family: var(--font-mono);
            font-size: 1.05rem;
            cursor: pointer;
            transition: all 0.15s;
          }
          .calc-btn:hover {
            border-color: var(--neon-cyan);
            transform: scale(1.05);
          }
        </style>
      `;
      openModal('Smart Multi-Functional Calculator // Interactive Demo', content);

      let calcVal = '0';
      const screen = document.getElementById('calc-screen');
      const pad = document.getElementById('calc-btn-pad');

      if (pad) {
        pad.addEventListener('click', (e) => {
          const btn = e.target.closest('.calc-btn');
          if (!btn) return;
          const val = btn.getAttribute('data-val');

          if (val === 'C') {
            calcVal = '0';
          } else if (val === '=') {
            try {
              // Sanitize math expression
              const clean = calcVal.replace(/[^0-9+\-*/.()]/g, '');
              const res = Function(`'use strict'; return (${clean})`)();
              calcVal = String(Number.isFinite(res) ? Math.round(res * 10000) / 10000 : 'Error');
            } catch (err) {
              calcVal = 'Error';
            }
          } else {
            if (calcVal === '0' && val !== '.') {
              calcVal = val;
            } else {
              calcVal += val;
            }
          }
          screen.textContent = calcVal;
        });
      }
    });
  }
})();
