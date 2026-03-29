let isMuted = false;

export const setMuted = (val) => { isMuted = val; };

export const playSFX = (path, volume = 0.2) => {
  if (isMuted || typeof window === "undefined") return;
  const audio = new Audio(path);
  audio.volume = volume;
  audio.play().catch(() => {}); 
};