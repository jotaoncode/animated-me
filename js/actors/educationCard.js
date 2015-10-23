var educationActor = new Actor();
_.extend(educationActor, {
  getCambridgeSizes: function () {
    return {
      height: this.els.cambridge.height(),
      width: this.els.cambridge.width()
    };
  },
  getUtnSizes: function () {
    return {
      height: this.els.utn.height(),
      width: this.els.utn.width()
    };
  },
  getUtn: function () {
    return this.els.utn;
  },
  getCambridge: function () {
    return this.els.cambridge;
  },
  setElements: function (els) {
    this.els = els;
  },
  showUtn: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.utn.velocity({
        scaleX: 0,
        scaleY: 0,
        opacity: 1
      }, {
        duration: 0
      }).velocity({
        scaleX: 1,
        scaleY: 1,
        opacity: 1
      }, {
        duration: 400,
        easing: 'easeOutCubic'
      })
    }, 400);
  },
  showCambridge: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.cambridge.velocity({
        scaleX: 0,
        scaleY: 0,
        opacity: 1
      }, {
        duration: 0
      }).velocity({
        scaleX: 1,
        scaleY: 1,
        opacity: 1
      }, {
        duration: 400,
        easing: 'easeOutCubic'
      })
    }, 400);
  },
  endAnimation: function () {
    this.els.utn.show().css({opacity: 1});
    this.els.cambridge.show().css({opacity: 1});
  }
});
