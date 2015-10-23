var labsActor = new Actor();
_.extend(labsActor, {
  getSpaceTravellerSizes: function () {
    return {
      height: this.els.spaceTraveller.height(),
      width: this.els.spaceTraveller.width()
    };
  },
  getTrendsSizes: function () {
    return {
      height: this.els.trends.height(),
      width: this.els.trends.width()
    };
  },
  getTrends: function () {
    return this.els.trends;
  },
  getSpaceTraveller: function () {
    return this.els.spaceTraveller;
  },
  showTrends: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.trends.velocity({
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
        duration: 500,
        easing: 'easeOutCubic'
      })
    }, 500);
  },
  showSpaceTraveller: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.spaceTraveller.velocity({
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
        duration: 500,
        easing: 'easeOutCubic'
      })
    }, 500);
  },
  endAnimation: function () {
    this.els.spaceTraveller.show().css({ opacity: 1});
    this.els.trends.show().css({ opacity: 1});
  }
});
