var wizardHatActor = new Actor();
_.extend(wizardHatActor, {
  hatStayAlive: function () {
    this.els.hat.removeClass().addClass('hat is-alive ' + scenesClass[actualScene]);
  },
  hatStopMoving: function () {
    this.els.hat.removeClass('is-alive');
  },
  start: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.hat.delay(500).removeClass()
      .addClass('hat presentate-hat ' + scenesClass[actualScene]);
    }, null);
  },
  dropWand: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.hat.delay(500).removeClass()
      .addClass('hat drop-wand ' + scenesClass[actualScene]);
    }, null);
  },
  finish: function () {
    var self = this;
    return self.runCSSAnimation(function () {
      return self.els.hat.removeClass().addClass('hat hide-hat ' + scenesClass[actualScene]);
    }, null);
  },
  hide: function () {
    this.els.hat.hide();
  },
  endAnimation: function () {
    this.els.hat.removeClass().addClass('hat');
  }
});
