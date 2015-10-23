var welcomeUserActor = new Actor();
_.extend(welcomeUserActor, {
  initElements: function () {
    var delay = 0, speed;
    this.els.paths.each(function (index, path) {
      var length = path.getTotalLength();
      var prevsiousStrokeLength = speed || 0;
      speed = length < 100 ? 20 : Math.floor(length);
      delay += prevsiousStrokeLength + 100;
      $(path).css('transition', 'none')
             .attr('data-length', length)
             .attr('data-speed', speed + 10)
             .attr('data-delay', delay)
             .attr('stroke-dashoffset', length)
             .attr('stroke-dasharray', length + ',' + length);
    });
  },
  start: function () {
    var def = Q.defer(), transStarted = 0;
    this.els.welcome.css('opacity', '1');
    this.els.paths.each(function (index, path) {
      var length = $(path).attr('data-length');
      var speed = $(path).attr('data-speed');
      var delay = $(path).attr('data-delay');
      transStarted++;
      $(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear')
             .attr('stroke-dashoffset', '0');
      $(path).one('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd', function () {
        transStarted--;
        if (transStarted === 0) {
          def.resolve();
        }
      });
    });
    return def.promise;
  },
  hide: function () {
    this.els.welcome.velocity('fadeOut', {
      duration: 500
    });
  },
  endAnimation: function () {
    this.els.welcome.velocity('fadeOut', {
      duration: 0
    });
  }
});
