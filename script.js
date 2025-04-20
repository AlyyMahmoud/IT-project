const exploreBtn = document.getElementById('exploreBtn');
const leftGate = document.querySelector('.left');
const rightGate = document.querySelector('.right');
const mainSite = document.querySelector('.main-site');

exploreBtn.addEventListener('click', () => {
  leftGate.classList.add('open-left');
  rightGate.classList.add('open-right');

  // بعد ما الباب يفتح، استنى ثانية واظهر الموقع
  setTimeout(() => {
    document.querySelector('.gate-container').style.display = 'none';
    mainSite.classList.remove('hidden');
  }, 1000);
});
