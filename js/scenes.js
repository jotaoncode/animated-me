var Scene = function () {
  this.setElements = function (els) {
    this.els = els;
  };
  this.finishedAnimation = function (sceneName) {
    var animated;
    isAnimating = false;
    animated = _.find(alreadyAnimated, function (name) {
      return name === scenes[sceneName];
    });
    if (!animated) {
      alreadyAnimated.push(scenes[sceneName]);
    }
  };
}
