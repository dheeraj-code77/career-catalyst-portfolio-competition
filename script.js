const page = document.querySelector(".page");
const themeToggle = document.querySelector(".theme-toggle");
const progress = document.querySelector(".scroll-progress");
const heroVideo = document.querySelector("#career-catalyst-video");
const videoPlayFallback = document.querySelector("#video-play-fallback");
const videoAudioToggle = document.querySelector("#video-audio-toggle");
const videoVolumeSlider = document.querySelector("#video-volume-slider");
const speakerOnIcon = document.querySelector("#speaker-on-icon");
const speakerMutedIcon = document.querySelector("#speaker-muted-icon");

if (heroVideo && videoPlayFallback && videoAudioToggle && videoVolumeSlider && speakerOnIcon && speakerMutedIcon) {
  heroVideo.removeAttribute("muted");
  heroVideo.defaultMuted = false;
  heroVideo.muted = false;
  heroVideo.volume = 1;
  let lastNonZeroVolume = heroVideo.volume;

  const unmuteVideo = () => {
    heroVideo.removeAttribute("muted");
    heroVideo.defaultMuted = false;

    if (heroVideo.volume === 0) {
      heroVideo.volume = lastNonZeroVolume;
    }

    heroVideo.muted = false;
  };

  const syncAudioControls = () => {
    const isMuted = heroVideo.muted || heroVideo.volume === 0;
    videoAudioToggle.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");
    videoAudioToggle.setAttribute("title", isMuted ? "Unmute video" : "Mute video");
    videoAudioToggle.setAttribute("aria-pressed", String(isMuted));
    speakerOnIcon.hidden = isMuted;
    speakerMutedIcon.hidden = !isMuted;
    speakerOnIcon.style.display = isMuted ? "none" : "block";
    speakerMutedIcon.style.display = isMuted ? "block" : "none";
    videoVolumeSlider.value = String(Math.round(heroVideo.volume * 100));

    if (heroVideo.volume > 0) {
      lastNonZeroVolume = heroVideo.volume;
    }
  };

  const showVideoFallback = () => {
    videoPlayFallback.hidden = false;
  };

  const hideVideoFallback = () => {
    videoPlayFallback.hidden = true;
  };

  heroVideo.addEventListener("volumechange", syncAudioControls);
  videoAudioToggle.addEventListener("click", () => {
    const isMuted = heroVideo.muted || heroVideo.volume === 0;

    if (isMuted) {
      unmuteVideo();
    } else {
      heroVideo.muted = true;
    }
  });
  videoVolumeSlider.addEventListener("input", () => {
    const volume = Number(videoVolumeSlider.value) / 100;
    heroVideo.volume = volume;
    heroVideo.muted = volume === 0;
  });
  syncAudioControls();

  heroVideo.addEventListener("playing", hideVideoFallback);

  heroVideo.play().catch(showVideoFallback);

  videoPlayFallback.addEventListener("click", () => {
    unmuteVideo();
    heroVideo.play().catch(showVideoFallback);
  });
}

themeToggle.addEventListener("click", () => {
  const isDark = page.classList.toggle("dark-theme");
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.querySelector("span").textContent = isDark ? "☾" : "☀";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#111820" : "#f4f1e9";
});

const updateProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${percentage}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
