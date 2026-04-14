(() => {
  const CIRCUMFERENCE = 2 * Math.PI * 140;

  const $ = (sel) => document.querySelector(sel);
  const displayH = $('#display-hours');
  const displayM = $('#display-minutes');
  const displayS = $('#display-seconds');
  const inputH = $('#input-hours');
  const inputM = $('#input-minutes');
  const inputS = $('#input-seconds');
  const btnStart = $('#btn-start');
  const btnPause = $('#btn-pause');
  const btnReset = $('#btn-reset');
  const statusLabel = $('#status-label');
  const ringProgress = $('.ring-progress');
  const ringGlow = $('.ring-glow');
  const inputSection = $('.input-section');
  const alarmOverlay = $('#alarm-overlay');
  const alarmDismiss = $('#alarm-dismiss');

  let totalSeconds = 0;
  let remainingSeconds = 0;
  let timerInterval = null;
  let state = 'idle'; // idle | running | paused | finished
  let audioCtx = null;
  let alarmOscillator = null;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateDisplay() {
    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;
    displayH.textContent = pad(h);
    displayM.textContent = pad(m);
    displayS.textContent = pad(s);
  }

  function updateRing() {
    const fraction = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;
    const offset = CIRCUMFERENCE * (1 - fraction);
    ringProgress.style.strokeDasharray = CIRCUMFERENCE;
    ringProgress.style.strokeDashoffset = offset;
    ringGlow.style.strokeDasharray = CIRCUMFERENCE;
    ringGlow.style.strokeDashoffset = offset;
  }

  function setStatus(text, className) {
    statusLabel.textContent = text;
    statusLabel.className = 'status-label';
    if (className) statusLabel.classList.add(className);
  }

  function getInputSeconds() {
    const h = Math.max(0, parseInt(inputH.value) || 0);
    const m = Math.max(0, parseInt(inputM.value) || 0);
    const s = Math.max(0, parseInt(inputS.value) || 0);
    return h * 3600 + m * 60 + s;
  }

  function setInputValues(seconds) {
    inputH.value = Math.floor(seconds / 3600);
    inputM.value = Math.floor((seconds % 3600) / 60);
    inputS.value = seconds % 60;
  }

  function startAlarmSound() {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const gain = audioCtx.createGain();
      gain.gain.value = 0.15;
      gain.connect(audioCtx.destination);

      let time = audioCtx.currentTime;
      const playTone = (freq, start, dur) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        osc.start(start);
        osc.stop(start + dur);
      };

      const pattern = () => {
        const now = audioCtx.currentTime;
        for (let i = 0; i < 3; i++) {
          playTone(880, now + i * 0.3, 0.15);
          playTone(1320, now + i * 0.3 + 0.15, 0.15);
        }
      };

      pattern();
      alarmOscillator = setInterval(pattern, 1200);
    } catch (e) {
      // Web Audio not available
    }
  }

  function stopAlarmSound() {
    if (alarmOscillator) {
      clearInterval(alarmOscillator);
      alarmOscillator = null;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }

  function tick() {
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      state = 'finished';
      remainingSeconds = 0;
      updateDisplay();
      updateRing();
      setStatus('完了', 'finished');
      btnStart.disabled = true;
      btnPause.disabled = true;
      btnReset.disabled = false;
      alarmOverlay.classList.add('active');
      startAlarmSound();
      return;
    }
    remainingSeconds--;
    updateDisplay();
    updateRing();
  }

  function start() {
    if (state === 'idle') {
      totalSeconds = getInputSeconds();
      if (totalSeconds <= 0) return;
      remainingSeconds = totalSeconds;
    }

    state = 'running';
    setStatus('動作中', 'running');
    inputSection.classList.add('disabled');
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;

    updateDisplay();
    updateRing();
    timerInterval = setInterval(tick, 1000);
  }

  function pause() {
    if (state !== 'running') return;
    clearInterval(timerInterval);
    timerInterval = null;
    state = 'paused';
    setStatus('一時停止', 'paused');
    btnStart.disabled = false;
    btnPause.disabled = true;
  }

  function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    state = 'idle';
    remainingSeconds = 0;
    totalSeconds = 0;
    updateDisplay();
    updateRing();
    setStatus('待機中', '');
    inputSection.classList.remove('disabled');
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = true;
    stopAlarmSound();
    alarmOverlay.classList.remove('active');
  }

  btnStart.addEventListener('click', start);
  btnPause.addEventListener('click', pause);
  btnReset.addEventListener('click', reset);

  alarmDismiss.addEventListener('click', () => {
    reset();
  });

  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const minutes = parseInt(btn.dataset.minutes);
      setInputValues(minutes * 60);
    });
  });

  document.querySelectorAll('.spin-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const max = parseInt(target.max);
      let val = parseInt(target.value) || 0;
      if (btn.dataset.dir === 'up') {
        val = val >= max ? 0 : val + 1;
      } else {
        val = val <= 0 ? max : val - 1;
      }
      target.value = val;
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (state === 'running') pause();
      else if (state === 'idle' || state === 'paused') start();
    }
    if (e.code === 'Escape') {
      if (state !== 'idle') reset();
    }
  });

  updateDisplay();
  updateRing();
})();
