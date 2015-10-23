var wandActor = new Actor();
_.extend(wandActor, {
  endAnimation: function () {
    this.els.wand.removeClass().addClass('wand');
  },
  getPositions: function () {
    return {
      left: this.els.wand.position().left + this.els.wand.width(),
      top: this.els.wand.position().top + (this.els.wand.height() * 0.5)
    };
  },
  wandStayAlive: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.wand.removeClass().addClass('wand is-alive ' + scenesClass[actualScene]);
    }, null);
  },
  start: function () {
    var self = this;
    return this.runAnimation(function () {
      return self.els.wand.removeClass().addClass('wand wand-appear ' + scenesClass[actualScene]);
    }, 1000);
  },
  sendMagic: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.wand.removeClass().addClass('wand send-magic ' + scenesClass[actualScene]);
    }, null);
  },
  sendMagicIcons: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.wand.removeClass().addClass('wand send-magic-icons');
    }, null, true);
  },
  writeWelcome: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.wand.removeClass().addClass('wand write-welcome');
    }, null, true);
  },
  finish: function () {
    var self = this;
    return this.runCSSAnimation(function () {
      return self.els.wand.removeClass().addClass('wand wand-disappear ' + scenesClass[actualScene]);
    }, null);
  }
});
