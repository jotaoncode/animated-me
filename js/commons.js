function finishAnimationAt(def, time) {
  window.setTimeout(function () {
    if (!isAnimating) {
      def.reject();
      return;
    }
    def.resolve();
  }, time);
}
function getVelocityCoordenatesToCenterElement($element, $fromEl) {
  var centerTop = ($element.height() * 0.5) + $element.offset().top;
  var centerLeft = ($element.width() * 0.5) + $element.offset().left;

  return {
    top : (centerTop - ($fromEl.offset().top + $fromEl.height() * 0.5)) + 'px',
    left: (centerLeft - $fromEl.offset().left - $fromEl.width() * 0.5) + 'px'
  };
}
