/* MakeField 방문 측정 (2026-10-04)
 * GA_ID 한 줄만 채우면 전 페이지에서 켜진다. 비어 있으면 아무 것도 하지 않는다.
 * - 유입 경로: 링크에 ?utm_source=blog&utm_medium=post 처럼 붙이면 GA4가 자동 분류
 * - 버튼 클릭: data-track="이름" 이 붙은 요소를 누르면 cta_click 이벤트(label=이름)
 * - 부록 PDF/ZIP 다운로드는 GA4 기본 측정(file_download)이 잡는다
 */
(function () {
  var GA_ID = 'G-Q4KJQ4TZ7W'; // 2026-10-05 makefield.ai@gmail.com 소유 속성
  if (!GA_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-track]') : null;
    if (el) window.gtag('event', 'cta_click', { label: el.getAttribute('data-track'), page: location.pathname });
  }, true);
})();
