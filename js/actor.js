function Actor() {
  this.setElements = function (els) {
    this.els = els;
  };
  this.runAnimation = function(animate, time) {
    var def = Q.defer();

    if (!isAnimating) {
      def.reject();
    }
    animate();
    if (time) {
      finishAnimationAt(def, time);
    } else {
      def.resolve();
    }

    return def.promise;
  };

  this.runCSSTransition = function(animate, time, nowait) {
    var def = Q.defer();

    if (!isAnimating) {
      def.reject();
      return;
    }
    if (nowait) {
      animate();
      def.resolve();
    } else {
      animate().one('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd', function() {
        if (!isAnimating) {
          def.reject();
          return;
        }
        def.resolve();
      });
    }

    if (time) {
      finishAnimationAt(def, time);
    }

    return def.promise;
  };

  this.runCSSAnimation = function(animate, time, nowait) {
    var def = Q.defer();

    if (!isAnimating) {
      def.reject();
      return;
    }
    if (nowait) {
      animate();
      def.resolve();
    } else {
      animate().one('webkitAnimationEnd animationend oAnimationEnd MSAnimationEnd', function() {
        if (!isAnimating) {
          def.reject();
          return;
        }
        def.resolve();

      });
    }
    if (time) {
      finishAnimationAt(def, time);
    }

    return def.promise;
  };

  this.start = function() {
    throw new Error("Override me");
  };

  this.endAnimation = function() {
    throw new Error("Override me");
  };
}
