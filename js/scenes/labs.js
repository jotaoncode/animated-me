var labsScene = new Scene();
_.extend(labsScene, {
  endAnimation: function (ev) {
    if (ev && ev.preventDefault) {
      ev.preventDefault();
    }
    if (isAnimating) {
      labsActor.endAnimation();
      wizardHatActor.endAnimation();
      wandActor.endAnimation();
      magicBlastActor.endAnimation();
      this.els.nextPage.velocity('fadeIn',{duration: 500});
      this.els.backPage.velocity('fadeIn',{duration: 500});
      this.finishedAnimation(scenes.labs);
    }
  },
  showTitle: function () {
    this.els.title.velocity('fadeIn', {
      duration: 400
    });
  },
  start: function() {
    var self = this;
    if (alreadyAnimated.indexOf(scenes.labs) >= 0) {
      return;
    }
    this.els.skip.click(this.endAnimation.bind(this));
    this.els.skip.show().velocity('fadeIn', {duration: 1000});

    isAnimating = true;
    actualScene = scenes.labs;
    window.setTimeout(function () {
      Q.fcall(self.showTitle.bind(self), self.endAnimation.bind(self))
      .then(wizardHatActor.start.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wizardHatActor.dropWand.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.start.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.hatStayAlive.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.sendMagic.bind(wandActor), self.endAnimation.bind(self))
      .then(magicBlastActor.createSpaceTraveller.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(wandActor.wandStayAlive.bind(wandActor), self.endAnimation.bind(self))
      .then(labsActor.showSpaceTraveller.bind(labsActor), self.endAnimation.bind(self))
      .then(wandActor.sendMagic.bind(wandActor), self.endAnimation.bind(self))
      .then(magicBlastActor.createTrends.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(labsActor.showTrends.bind(labsActor), self.endAnimation.bind(self))
      .then(wandActor.finish.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.finish.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(function () {
        self.els.nextPage.velocity('fadeIn',{duration: 500});
        self.els.backPage.velocity('fadeIn',{duration: 500});
        self.els.skip.hide();
        self.finishedAnimation(scenes.labs);
      }.bind(self))
      .catch(function () {
        console.log(arguments);
      }).done();
    }, 1000);
  }
});
