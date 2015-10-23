/*globals Actor*/
var magicBlastActor = new Actor();

_.extend(magicBlastActor, {
  start: function () {
  },
  endAnimation: function () {
    this.els.magicBlast.velocity('fadeOut', {
      duration: 0
    });
  },
  getSizes: function () {
    return {
      width: this.els.magicBlast.width(),
      height: this.els.magicBlast.height()
    };
  },
  createCard: function () {
    var self = this;
    var wandPosition = wandActor.getPositions();
    var lastPosition;
    var cardSizes = cardActor.getSizes();
    var scaleX = cardSizes.width / this.els.magicBlast.width();
    var scaleY = cardSizes.height / this.els.magicBlast.height();
    this.els.magicBlast.css({
      height: '15px',
      width: '15px',
      opacity: 0,
      left: wandPosition.left,
      top: wandPosition.top,
      position: 'absolute',
      backgroundColor: '#f44336'
    });
    lastPosition = getVelocityCoordenatesToCenterElement(cardActor.getContactCard(), this.els.magicBlast);
    return this.runAnimation(function () {
      self.els.magicBlast.velocity({
        translateX: lastPosition.left,
        translateY: lastPosition.top,
        rotateZ: "720deg",
        opacity: 1
      }, {
        duration: 500,
        easing: 'easeOutCubic'
      }).velocity('fadeOut', {
        duration: 500
      }).velocity({
        translateX: -lastPosition.left,
        translateY: -lastPosition.top,
        rotateZ: "0"
      });
    }, 700);
  },
  fireToCenterElement: function ($element, options, duration) {
    var self = this,
    lastPosition,
    scaleX,
    scaleY;
    this.els.magicBlast.css(_.extend({
      height: '15px',
      width: '15px',
      opacity: 1,
      position: 'absolute',
      display: 'block',
      zIndex: 1,
      backgroundColor: '#FF9955'
    }, options.init));
    lastPosition;

    scaleX = $element.width() / this.els.magicBlast.width();
    scaleY = $element.height() / this.els.magicBlast.height();

    lastPosition = getVelocityCoordenatesToCenterElement($element, this.els.magicBlast);
    return this.runAnimation(function () {
      self.els.magicBlast.velocity(_.extend({
        translateX: lastPosition.left,
        translateY: lastPosition.top,
        rotateZ: "720deg"
      }, options.animation), {
        duration: 300,
        easing: 'easeOutCubic'
      }).velocity({
        scaleX: 0,
        scaleY: 0
      }, {
        duration: 100
      }).velocity('fadeOut', {
        duration: 100
      }).velocity({
        translateX: 0,
        translateY: 0,
        scaleY: 1,
        scaleX: 1,
        rotateZ: "0deg"
      }, {
        duration: 0,
        easing: 'easeOutCubic'
      });
    }, duration || 800);
  },
  iconBlastInit: function () {
    return {
      init: {
        borderRadius: '50%',
        backgroundColor: '#f44336'
      },
      animation: {
      }
    };
  },
  showIconFacebook: function () {
    return this.fireToCenterElement(this.els.iconFacebook, this.iconBlastInit());
  },
  showIconGit: function () {
    return this.fireToCenterElement(this.els.iconGit, this.iconBlastInit());
  },
  showIconTwitter: function () {
    return this.fireToCenterElement(this.els.iconTwitter, this.iconBlastInit());
  },
  showIconLinkedin: function () {
    return this.fireToCenterElement(this.els.iconLinkedin, this.iconBlastInit());
  },
  createSkills: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(panelSkills.getSkillsContainer(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  },
  showTimeline: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(timelineActor.getTimeline(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  },
  showEducationCardUtn: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(educationActor.getUtn(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  },
  showEducationCardCambridge: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(educationActor.getCambridge(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  },
  createTrends: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(labsActor.getTrends(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  },
  createSpaceTraveller: function () {
    var wandPosition = wandActor.getPositions();
    return this.fireToCenterElement(labsActor.getSpaceTraveller(), {
      init: {
        left: wandPosition.left,
        top: wandPosition.top,
        backgroundColor: '#90CAF9'
      },
      animation: {
        backgroundColor: '#90CAF9'
      }
    }, 300);
  }
});
