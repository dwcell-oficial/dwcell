// DW CELL — interações da landing page

// Estado da nav ao rolar
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Menu mobile
const burger = document.getElementById('navBurger');
const menu = document.getElementById('navMenu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Pausa vídeos fora da viewport (economia em mobile) + garante autoplay real
const videos = document.querySelectorAll('video[autoplay]');

function tryPlay(v) {
  // iOS exige muted como atributo real antes do play() programático
  v.muted = true;
  v.defaultMuted = true;
  const p = v.play();
  if (p) p.catch(() => {});
}

const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const v = entry.target;
    if (entry.isIntersecting) {
      tryPlay(v);
    } else {
      v.pause();
    }
  });
}, { threshold: 0.15 });
videos.forEach(v => {
  videoObserver.observe(v);
  // assim que o vídeo tiver dado suficiente, tenta tocar de novo
  // (cobre o caso do autoplay nativo falhar por o vídeo ainda não estar pronto)
  v.addEventListener('loadeddata', () => {
    if (v.getBoundingClientRect().top < window.innerHeight) tryPlay(v);
  });
});

// Fallback: iOS em Modo de Baixo Consumo bloqueia autoplay mesmo com
// muted+playsinline — no primeiro toque/scroll do usuário (gesto real),
// tenta tocar de novo qualquer vídeo que ainda esteja pausado.
function unlockVideosOnce() {
  videos.forEach(v => {
    if (v.paused && v.getBoundingClientRect().top < window.innerHeight) tryPlay(v);
  });
}
['touchstart', 'click', 'scroll'].forEach(evt => {
  document.addEventListener(evt, unlockVideosOnce, { once: true, passive: true });
});

// Som dos reels reais: liberado por clique/toque (gesto do usuário)
function setReelSound(video, on) {
  const wrap = video.closest('.phone-screen');
  const btn = wrap ? wrap.querySelector('.sound-toggle') : null;
  video.dataset.sound = on ? 'on' : 'off';
  video.muted = !on;
  if (btn) {
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-label', on ? 'Desativar som' : 'Ativar som');
  }
}
document.querySelectorAll('.sound-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const video = btn.closest('.phone-screen').querySelector('video');
    const turnOn = video.dataset.sound !== 'on';
    // nunca dois áudios ao mesmo tempo
    document.querySelectorAll('video[data-sound="on"]').forEach(v => {
      if (v !== video) setReelSound(v, false);
    });
    setReelSound(video, turnOn);
    if (turnOn) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  });
});

// Voltar ao topo
const topFloat = document.getElementById('topFloat');
window.addEventListener('scroll', () => {
  topFloat.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
topFloat.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
