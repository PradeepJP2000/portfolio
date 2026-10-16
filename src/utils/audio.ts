/**
 * Synthesizes the iconic cinematic "Ta-Dum" sound using the Web Audio API.
 * Completely self-contained: zero external audio files needed, works offline and on GitHub Pages!
 */
export function playTaDumSound(volume: number = 0.5) {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, now);
    masterGain.connect(ctx.destination);

    // Tone 1: Deep impact bass thud (starts immediately)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(35, now + 0.35);

    gain1.gain.setValueAtTime(0.01, now);
    gain1.gain.exponentialRampToValueAtTime(0.9, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc1.connect(gain1);
    gain1.connect(masterGain);
    osc1.start(now);
    osc1.stop(now + 1.0);

    // Tone 2: The classic resonant cinematic swell (starts at +0.12s)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(110, now + 0.12);
    osc2.frequency.exponentialRampToValueAtTime(55, now + 1.2);

    // Filter to give that warm, dark theatrical punch
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(180, now + 1.2);

    gain2.gain.setValueAtTime(0.0001, now);
    gain2.gain.setValueAtTime(0.01, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.7, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    osc2.connect(filter);
    filter.connect(gain2);
    gain2.connect(masterGain);
    osc2.start(now + 0.12);
    osc2.stop(now + 1.6);

    // Tone 3: The high metallic shimmer / chord ring
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(440, now + 0.18);
    osc3.frequency.exponentialRampToValueAtTime(220, now + 1.4);

    gain3.gain.setValueAtTime(0.0001, now);
    gain3.gain.setValueAtTime(0.01, now + 0.18);
    gain3.gain.exponentialRampToValueAtTime(0.18, now + 0.28);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc3.connect(gain3);
    gain3.connect(masterGain);
    osc3.start(now + 0.18);
    osc3.stop(now + 1.7);
  } catch (e) {
    console.warn('Audio playback not permitted or supported yet:', e);
  }
}

export function playClickSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    // ignore
  }
}
