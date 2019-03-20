export function getElement(expr) {
  return (typeof expr === 'string') ? document.querySelector(expr) : expr;
}

export function getComputedStyle(el, key) {
  const computedStyle = window.getComputedStyle(el);
  return computedStyle[key] || '';
}

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.
export function easeOutCubic(pos) {
  return ((pos - 1) ** 3) + 1;
}

export function easeInOutCubic(pos) {
  const p = pos / 0.5;
  if (p < 1) {
    return 0.5 * (p ** 3);
  }
  return 0.5 * (((p - 2) ** 3) + 2);
}
