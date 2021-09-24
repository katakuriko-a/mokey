// スクロールイベント
const f_targets = document.querySelectorAll(".fade_in");
const offset = 100;

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const h = window.innerHeight;

  f_targets.forEach((target) => {
    const pos = target.getBoundingClientRect().top + scroll;

    if (scroll > pos - h + offset) {
      target.classList.add("inview");
    } else {
      target.classList.remove("inview");
    }
  });
});

const ttls = document.querySelectorAll('.ttl');
window.addEventListener('load', () => {
  ttls.forEach((ttl) => {
    ttl.classList.add('inview');
  })

})
