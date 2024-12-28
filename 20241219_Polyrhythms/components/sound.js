const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frecuency = 440, duration = 1) {
  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();

  osc.connect(envelope);
  envelope.connect(audioCtx.destination);

  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

  osc.frequency.setValueAtTime(frecuency, audioCtx.currentTime);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

export default playSound; // Exporto la clase `Sound` para poder importarla en otro archivo
