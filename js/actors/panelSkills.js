var panelSkills = new Actor();
_.extend(panelSkills, {
  getSizes: function () {
    return {
      width: this.els.skillsContainer.width(),
      height: this.els.skillsContainer.height()
    };
  },
  getSkillsContainer: function () {
    return this.els.skillsContainer;
  },
  showSkills: function () {
    var self = this;
    return this.runAnimation(function () {
      self.els.skillsContainer.velocity({
        scaleX: 0.1,
        scaleY: 0.1,
        opacity: 1
      }, {
        duration: 0
      }).velocity({
        scaleX: 1,
        scaleY: 1,
        opacity: 1
      }, {
        duration : 500,
        easing: 'easeOutCubic'
      });
    }, 500);
  },
  endAnimation: function () {
    this.els.skillsContainer.show().css({opacity: 1});
  }
});
