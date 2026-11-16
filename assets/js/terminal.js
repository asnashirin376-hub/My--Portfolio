/* ==========================================================================
   TERMINAL BOOT SEQUENCE & SOUND SYNTHESIS
   Neural Kernel • ASNA_DEV_OS v2.6
   ========================================================================== */
(function() {
  const terminalScreen = document.getElementById('terminal-boot-screen');
  const terminalLogs = document.getElementById('terminal-logs');
  const enterBtn = document.getElementById('btn-enter-portfolio');
  const skipBtn = document.getElementById('btn-skip-boot');
  const soundToggle = document.getElementById('terminal-sound-toggle');
  const navTerminalBtn = document.getElementById('btn-nav-terminal');

  if (!terminalScreen || !terminalLogs) return;

  let audioEnabled = true;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSynthBeep(freq = 600, duration = 0.05, type = 'sine') {
    if (!audioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy
    }
  }

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      soundToggle.innerHTML = audioEnabled 
        ? '<i data-lucide="volume-2" class="w-3.5 h-3.5"></i> AUDIO: ON' 
        : '<i data-lucide="volume-x" class="w-3.5 h-3.5"></i> AUDIO: OFF';
      if (window.lucide) window.lucide.createIcons();
      if (audioEnabled) {
        initAudio();
        playSynthBeep(880, 0.08);
      }
    });
  }

  const BOOT_SEQUENCE = [
    { text: "INITIALIZING NEURAL KERNEL • ASNA_DEV_OS v2.6 ...", delay: 180, class: "text-cyan text-bold" },
    { text: "Loading core runtime: Python 3.14 • Django Engine • REST Subsystems", delay: 320, class: "text-purple" },
    { text: "asna@dev-studio:~ (zsh)", delay: 200, class: "text-muted" },
    { text: "[✓] USER: ASNA SHIRIN E | ROLE: PYTHON FULL-STACK DEVELOPER", delay: 280, class: "text-green text-bold" },
    { text: "[✓] ACADEMIC: BCA (BACHELOR OF COMPUTER APPLICATIONS) • GRAD: 2026", delay: 220, class: "text-cyan" },
    { text: "[✓] LOCATION: MALAPPURAM, KERALA, INDIA", delay: 200, class: "text-green" },
    { text: "[✓] TECH STACK: PYTHON • DJANGO • FLUTTER • REACT • POSTGRESQL", delay: 240, class: "text-purple" },
    { text: "[✓] STATUS: OPEN TO TRAINEE / ENTRY-LEVEL OPPORTUNITIES", delay: 260, class: "text-green text-bold" },
    { text: "[✓] ROOT ACCESS: GRANTED -> ALL SUBSYSTEMS ONLINE", delay: 300, class: "text-magenta text-bold" },
    { text: ">> PRESS [ENTER] OR CLICK BELOW TO INITIALIZE INTERFACE ↵", delay: 250, class: "text-cyan text-bold" }
  ];

  let currentStep = 0;
  let hasBooted = false;

  function typeBootLine() {
    if (currentStep >= BOOT_SEQUENCE.length) {
      if (enterBtn) {
        enterBtn.classList.remove('opacity-60', 'pointer-events-none');
        enterBtn.focus();
      }
      return;
    }

    const item = BOOT_SEQUENCE[currentStep];
    const lineEl = document.createElement('div');
    lineEl.className = `terminal-log-line ${item.class || ''}`;
    lineEl.textContent = item.text;
    terminalLogs.appendChild(lineEl);
    terminalLogs.scrollTop = terminalLogs.scrollHeight;

    initAudio();
    playSynthBeep(520 + (currentStep * 45), 0.04);

    currentStep++;
    setTimeout(typeBootLine, item.delay);
  }

  function launchPortfolio() {
    if (hasBooted) {
      terminalScreen.classList.add('terminal-closed');
      return;
    }
    hasBooted = true;
    initAudio();
    playSynthBeep(920, 0.15, 'triangle');
    setTimeout(() => playSynthBeep(1200, 0.2, 'sine'), 100);

    terminalScreen.classList.add('terminal-closed');
    sessionStorage.setItem('asna_booted', 'true');
  }

  // Check if previously entered in this session
  if (sessionStorage.getItem('asna_booted') === 'true') {
    terminalScreen.classList.add('terminal-closed');
    hasBooted = true;
  } else {
    setTimeout(typeBootLine, 400);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', launchPortfolio);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      terminalLogs.innerHTML = "";
      BOOT_SEQUENCE.forEach(item => {
        const lineEl = document.createElement('div');
        lineEl.className = `terminal-log-line ${item.class || ''}`;
        lineEl.textContent = item.text;
        terminalLogs.appendChild(lineEl);
      });
      launchPortfolio();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!terminalScreen.classList.contains('terminal-closed')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        launchPortfolio();
      } else if (e.key === 'Escape') {
        launchPortfolio();
      }
    }
  });

  if (navTerminalBtn) {
    navTerminalBtn.addEventListener('click', () => {
      terminalScreen.classList.remove('terminal-closed');
      hasBooted = false;
    });
  }
})();
