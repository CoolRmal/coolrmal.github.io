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
})();

// Keep exceptionally long inline formulas inside the same reading column.
// Short formulas retain their inline layout, including after a window resize.
window.fitArticleMath = function () {
  var article = document.querySelector('.mathematical-article');
  if (!article) return;
  article.querySelectorAll('.MathJax_CHTML').forEach(function (frame) {
    if (frame.closest('.MJXc-display')) return;
    var container = frame.closest('.nobr, .math.inline') || frame;
    var block = container.parentElement;
    while (block !== article && /^(inline|contents)$/.test(getComputedStyle(block).display)) {
      block = block.parentElement;
    }
    var style = getComputedStyle(block);
    var available = block.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    var width = Math.max(frame.scrollWidth, frame.getBoundingClientRect().width);
    container.classList.toggle('article-math-scroll', width > available + 1);
  });
};
var mathResizeFrame;
window.addEventListener('resize', function () {
  cancelAnimationFrame(mathResizeFrame);
  mathResizeFrame = requestAnimationFrame(window.fitArticleMath);
});
if (document.fonts) document.fonts.ready.then(window.fitArticleMath);

// Keep punctuation on the same line as the formula, code span or link before it,
// so that no line ever starts with ",", "." and the like.
window.gluePunctuation = function () {
  var main = document.querySelector('main');
  if (!main) return;
  var PUNCT = /^[,.;:!?)\]]+/;
  var INLINE = { A: 1, CODE: 1, EM: 1, STRONG: 1, B: 1, I: 1, SUB: 1, SUP: 1 };
  var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  var targets = [], node;
  while ((node = walker.nextNode())) {
    if (PUNCT.test(node.nodeValue) && node.previousSibling &&
        !(node.parentNode.classList && node.parentNode.classList.contains('nobr'))) {
      targets.push(node);
    }
  }
  targets.forEach(function (text) {
    var prev = text.previousSibling, group;
    // Let long titles and emphasized phrases wrap, with only the punctuation
    // attached to the final word instead of keeping the entire phrase together.
    if (prev.nodeName === 'A' ||
        (INLINE[prev.nodeName] && /\s/.test(prev.textContent.trim()))) {
      text.nodeValue = '\u2060' + text.nodeValue;
      return;
    }
    if (prev.nodeName === 'SCRIPT' && /math\/tex/.test(prev.type || '')) {
      // MathJax output: [preview] frame <script type="math/tex">
      var frame = prev.previousSibling;
      if (!frame || !(frame.classList && frame.classList.contains('MathJax_CHTML'))) return;
      group = [frame, prev];
      var preview = frame.previousSibling;
      if (preview && preview.classList && preview.classList.contains('MathJax_Preview')) group.unshift(preview);
    } else if (INLINE[prev.nodeName] ||
        (prev.nodeName === 'SPAN' && prev.classList.contains('math') &&
         prev.classList.contains('inline'))) {
      group = [prev];
    } else {
      return;
    }
    var punct = text.nodeValue.match(PUNCT)[0];
    var wrap = document.createElement('span');
    wrap.className = 'nobr';
    group[0].parentNode.insertBefore(wrap, group[0]);
    group.forEach(function (n) { wrap.appendChild(n); });
    wrap.appendChild(document.createTextNode(punct));
    text.nodeValue = text.nodeValue.slice(punct.length);
  });
  window.fitArticleMath();
};
window.gluePunctuation();
