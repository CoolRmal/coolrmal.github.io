(function () {
  'use strict';
  var demo = document.getElementById('adjacent-grid-demo');
  if (!demo) return;
  var slider = demo.querySelector('input');
  var mode = demo.querySelector('select');
  var drawing = demo.querySelector('.grid-drawing');
  var status = demo.querySelector('.grid-status');
  var ns = 'http://www.w3.org/2000/svg';
  function element(name, attributes, label) {
    var el = document.createElementNS(ns, name);
    Object.keys(attributes).forEach(function (key) { el.setAttribute(key, attributes[key]); });
    if (label) el.textContent = label;
    drawing.appendChild(el);
    return el;
  }
  function render() {
    var center = Number(slider.value) / 1000;
    var length = mode.value === 'space' ? 1 / 8 : 1 / 128;
    var left = center - length / 2;
    var right = center + length / 2;
    var x = function (v) { return 340 + v * 200; };
    drawing.textContent = '';
    var chosen = -1;
    for (var row = 0; row < 3; row++) {
      var shift = row / 3;
      var start = Math.floor(left - shift) + shift;
      var contains = left > start + 1e-10 && right < start + 1 - 1e-10;
      var y = 52 + 82 * row;
      if (contains && chosen === -1) chosen = row;
      if (contains) element('rect', { x: x(start), y: y - 21, width: 200, height: 42, rx: 3, class: 'grid-cell' });
      element('line', { x1: 95, y1: y, x2: 760, y2: y, class: 'grid-line' });
      for (var k = -2; k <= 3; k++) {
        var pos = x(k + shift);
        if (pos >= 95 && pos <= 760) element('line', { x1: pos, y1: y - 28, x2: pos, y2: y + 28, class: 'grid-line' });
      }
      element('line', { x1: x(left), y1: y, x2: x(right), y2: y, class: 'interval' });
      element('text', { x: 8, y: y + 5 }, ['0', '1/3', '2/3'][row]);
      element('text', { x: 775, y: y + 5 }, contains ? 'fits' : 'split');
    }
    element('text', { x: x(0), y: 284 }, '0');
    element('text', { x: x(1), y: 284 }, '1');
    status.textContent = 'Interval length: ' + (mode.value === 'space' ? '1/8 of a spatial cell.' : '1/128 of a time cell.') + ' A green cell contains the whole interval; at least one always does.';
  }
  slider.addEventListener('input', render);
  mode.addEventListener('change', render);
  render();
}());
