(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Theme: cycles system -> light -> dark
  var order = ['system', 'light', 'dark'];
  var root = document.documentElement;

  function apply(setting) {
    var dark = setting === 'dark' || (setting === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    root.setAttribute('data-theme-setting', setting);
    try { localStorage.setItem('theme-setting', setting); } catch (e) {}
  }

  var button = document.getElementById('light-toggle');
  if (button) {
    button.addEventListener('click', function () {
      var current = root.getAttribute('data-theme-setting') || 'system';
      apply(order[(order.indexOf(current) + 1) % order.length]);
    });
  }

  // Follow the OS while the setting is "system"
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if ((root.getAttribute('data-theme-setting') || 'system') === 'system') apply('system');
  });
})();
