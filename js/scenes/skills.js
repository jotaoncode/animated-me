var skillsScene = new Scene();
_.extend(skillsScene, {
  endAnimation: function (ev) {
    if (ev && ev.preventDefault) {
      ev.preventDefault();
    }
    if (isAnimating) {
      panelSkills.endAnimation();
      wizardHatActor.endAnimation();
      wandActor.endAnimation();
      magicBlastActor.endAnimation();
      this.els.nextPage.velocity('fadeIn',{duration: 500});
      this.els.backPage.velocity('fadeIn',{duration: 500});
      this.finishedAnimation(scenes.skills);
    }
  },
  showTitle: function () {
    var def = Q.defer();
    this.els.title.velocity('fadeIn', {
      duration: 700
    });
    finishAnimationAt(def, 700);
    return def.promise;
  },
  start: function () {
    var self = this;
    if (alreadyAnimated.indexOf(scenes.skills) >= 0) {
      return;
    }
    this.els.skip.click(this.endAnimation.bind(this));
    this.els.skip.show().velocity('fadeIn', {duration: 1000});

    isAnimating = true;
    actualScene = scenes.skills;
    window.setTimeout(function () {
      Q.fcall(self.showTitle.bind(self), self.endAnimation.bind(self))
      .then(wizardHatActor.start.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wizardHatActor.dropWand.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.start.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.hatStayAlive.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.sendMagic.bind(wandActor), self.endAnimation.bind(self))
      .then(magicBlastActor.createSkills.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(panelSkills.showSkills.bind(panelSkills), self.endAnimation.bind(self))
      .then(wandActor.finish.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.finish.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(function() {
        self.els.nextPage.velocity('fadeIn',{duration: 500});
        self.els.backPage.velocity('fadeIn',{duration: 500});
        self.els.skip.hide();
        self.finishedAnimation(scenes.skills);
      }).done();
    }, 1000);
  }
});
