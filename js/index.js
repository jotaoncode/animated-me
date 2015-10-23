/* globals $, Materialize, console, Q, createStoryJS*/
function stopActualScene() {
  if (isAnimating) {
    scenesInstances[actualScene].endAnimation();
  }
}
function asignScrollMovements() {
  $('.next-article').click(function (ev) {
    ev.preventDefault();
    var articleHeight = $(_.first($('article'))).height();
    var articleNumber = parseInt($(ev.currentTarget).data('article'));
    $('html').velocity('scroll', {
      offset: (articleHeight * articleNumber) + 'px'
    });
    stopActualScene();
    switch (articleNumber) {
      case 1:
        experienceScene.start();
        break;
      case 2:
        skillsScene.start();
        break;
      case 3:
        educationScene.start();
        break;
      case 4:
        labsScene.start();
        break;
    }
  });
  $('.back-article').click(function (ev) {
    ev.preventDefault();
    var articleHeight = $(_.first($('article'))).height();
    var articleNumber = parseInt($(ev.currentTarget).data('article'));
    stopActualScene();
    $('html').velocity('scroll', {
      offset: (articleHeight * articleNumber) + 'px'
    });
  });
}

$(document).ready(function() {
  asignScrollMovements();
  $('html').velocity('scroll', {
    offset: '0px'
  });
  animationCardScene.start();
});
