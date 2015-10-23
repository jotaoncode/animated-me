var animationCardScene = new Scene();
_.extend(animationCardScene, {
  endAnimation: function (ev) {
    if (ev && ev.preventDefault) {
      ev.preventDefault();
    }
    if (isAnimating) {
      welcomeUserActor.endAnimation();
      wizardHatActor.endAnimation();
      wandActor.endAnimation();
      cardActor.endAnimation();
      magicBlastActor.endAnimation();
      this.els.nextPage.velocity('fadeIn',{duration: 500});
      this.finishedAnimation(scenes.card);
    }
  },
  start: function() {
    var self = this;
    if (alreadyAnimated.indexOf(scenes.card) >= 0) {
      return;
    }

    this.els.skip.click(this.endAnimation.bind(this));
    this.els.skip.show().velocity('fadeIn', {duration: 1000});
    isAnimating = true;
    actualScene = scenes.card;
    window.setTimeout(function () {
      Q.fcall(wizardHatActor.start.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wizardHatActor.dropWand.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.start.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.hatStayAlive.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(wandActor.writeWelcome.bind(wandActor), self.endAnimation.bind(self))
      .then(welcomeUserActor.start.bind(welcomeUserActor), self.endAnimation.bind(self))
      .then(wandActor.wandStayAlive.bind(wandActor), self.endAnimation.bind(self))
      .then(welcomeUserActor.hide.bind(welcomeUserActor), self.endAnimation.bind(self))
      .then(wandActor.sendMagic.bind(wandActor), self.endAnimation.bind(self))
      .then(magicBlastActor.start.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(magicBlastActor.createCard.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(cardActor.start.bind(cardActor), self.endAnimation.bind(self))
      .then(wandActor.wandStayAlive.bind(wandActor), self.endAnimation.bind(self))
      .then(cardActor.showImage.bind(cardActor), self.endAnimation.bind(self))
      .then(cardActor.showName.bind(cardActor), self.endAnimation.bind(self))
      .then(cardActor.showActivity.bind(cardActor), self.endAnimation.bind(self))
      .then(cardActor.showMail.bind(cardActor), self.endAnimation.bind(self))
      .then(cardActor.showLocation.bind(cardActor), self.endAnimation.bind(self))
      .then(wandActor.sendMagicIcons.bind(wandActor), self.endAnimation.bind(self))
      .then(magicBlastActor.showIconFacebook.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(cardActor.showIconFacebook.bind(cardActor), self.endAnimation.bind(self))
      .then(magicBlastActor.showIconLinkedin.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(cardActor.showIconLinkedin.bind(cardActor), self.endAnimation.bind(self))
      .then(magicBlastActor.showIconGit.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(cardActor.showIconGit.bind(cardActor), self.endAnimation.bind(self))
      .then(magicBlastActor.showIconTwitter.bind(magicBlastActor), self.endAnimation.bind(self))
      .then(cardActor.showIconTwitter.bind(cardActor), self.endAnimation.bind(self))
      .then(wandActor.finish.bind(wandActor), self.endAnimation.bind(self))
      .then(wizardHatActor.finish.bind(wizardHatActor), self.endAnimation.bind(self))
      .then(function () {
        self.els.nextPage.velocity('fadeIn',{duration: 500});
        self.els.skip.hide();
        self.finishedAnimation(scenes.card);
      }.bind(self))
      .catch(function () {
        console.log(arguments);
      }).done();
    }, 1000);
  }
});
