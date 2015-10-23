/*glboals Actor, animationCardScener*/

var explotionActor = new Actor();
_.extend(explotionActor, {
  setElements: function(els) {
    this.els = els;
  },
  start: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.explotionContainer.show();
      self.els.explotionContainer.css({
        top: '300px',
        left: '800px'
      });

      _.each(self.els.explotionParticles, function (particle) {
        var $particle = $(particle);
        $particle.show();
        $particle.velocity({
          translateY: $particle.data('y'),
          translateX: $particle.data('x'),
          opacity: 1,
          scale: $particle.data('scale')
        }, {
          duration: 1000,
          easing: 'easeOutCubic'
        });
      });
    }, 1000, animationCardScene);
  },
  initElements: function () {
    this.els.explotionContainer.hide();
    _.each(this.els.explotionParticles, function (particle) {
      $(particle).attr('scale', 0.3 + Math.random() * 0.7)
      .attr('data-x', _.random(-500, 500))
      .attr('data-y', _.random(-500, 500))
      .css({
        backgroundColor: (-1 + Math.random() * 2 > 0) ? '#ffffff' : '#000000'
      });
    });
  }
});

