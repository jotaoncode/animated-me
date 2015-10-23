/*globals $, Q, console, Actor*/
var cardActor = new Actor();
_.extend(cardActor, {
  getSizes: function () {
    return {
      height: this.els.contactCard.height(),
      width: this.els.contactCard.width()
    };
  },
  getContactCard: function () {
    return this.els.contactCard;
  },
  start: function() {
    var self = this;
    var blastSizes = magicBlastActor.getSizes();
    var sizes = {
      width: blastSizes.width / this.els.contactCard.width(),
      height: blastSizes.height / this.els.contactCard.height(),
    };
    return this.runAnimation(function () {
      self.els.contactCard.velocity({
        scaleX: sizes.width,
        scaleY: sizes.height,
        opacity: 1
      }, {
        duration: 0
      }).velocity({
        opacity : 1,
        scaleX  : 1,
        scaleY  : 1
      }, {
        duration: 600,
        easing: 'easeOutCubic'
      });
    }, 600);
  },
  showName: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.profileName.velocity('fadeIn', {
        duration: 300,
        easing: 'easeOutCubic'
      });
    }, 300);
  },
  showMail: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.mailContact.velocity('fadeIn', {
        duration: 300,
        easing: 'easeOutCubic'
      });
      self.els.mailContactIcon.velocity({
        opacity: 1,
        rotateZ: '360deg'
      }, {
        duration: 300,
        easing: 'easeOutCubic'
      });
    }, 300);
  },
  showImage: function() {
    var self = this;
    var blastSizes = magicBlastActor.getSizes();
    var sizes = {
      width: blastSizes.width / this.els.profileImage.width(),
      height: blastSizes.height / this.els.profileImage.height(),
    };
    return this.runAnimation(function () {
      self.els.profileImage.velocity('fadeIn', {
        duration: 400
      });
    }, 400);
  },
  showActivity: function () {
    var def = Q.defer();
    this.els.activity.typed({
      strings: ["Web Application Developer"],
      typedSpeed: 1200,
      showCursor: false,
      callback: function() {
        def.resolve();
      }
    });
    return def.promise;
  },
  showIconFacebook: function () {
    var self = this;
    return this.runAnimation(function() {
      self.els.iconFacebook.removeClass('spin-appear').addClass('spin-appear');
    }, null);
  },
  showIconLinkedin: function () {
    var self = this;
    return this.runAnimation(function() {
        self.els.iconLinkedin.removeClass('spin-appear').addClass('spin-appear');
    }, null);
  },
  showIconGit: function () {
    var self = this;
    return this.runAnimation(function() {
      self.els.iconGit.removeClass('spin-appear').addClass('spin-appear');
    }, null);
  },
  showIconTwitter: function () {
    var self = this;
    return this.runAnimation(function() {
      self.els.iconTwitter.removeClass('spin-appear').addClass('spin-appear');
    }, null);
  },
  showLocation: function () {
    var self = this;
    return this.runAnimation(function() {
      self.els.locationContact.velocity('fadeIn', {
        duration: 300,
        easing: 'easeOutCubic'
      });
      self.els.locationContactIcon.velocity({
        opacity: 1,
        rotateZ: 360
      }, {
        duration: 300,
        easing: 'easeOutCubic'
      });
    }, 300);
  },
  endAnimation: function () {
    this.els.card.show().css({opacity:1});
    this.els.cardContent.show().css({opacity:1});
    this.els.contactCard.show().css({opacity:1});
    this.els.mailContactIcon.show().css({opacity:1});
    this.els.mailContact.show().css({opacity:1});
    this.els.profileImage.show().css({opacity:1})
    this.els.profileName.show().css({opacity:1});
    this.els.locationContact.show().css({opacity:1});
    this.els.locationContactIcon.show().css({opacity:1});
    this.els.activity.text("Web Application Developer");
    this.els.iconFacebook.show().css({
      opacity:1
    });
    this.els.iconTwitter.show().css({
      opacity:1
    });
    this.els.iconLinkedin.show().css({
      opacity:1
    });
    this.els.iconGit.show().css({
      opacity:1
    });
  }
});
