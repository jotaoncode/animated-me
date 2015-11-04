describe('Hat', function () {
  beforeEach(function () {
    fixture.base = 'test/hatSpec';
    fixture.load('hat.fixture.html');
    wizardHatActor.setElements({
      hat : $('#hat'),
      hatContent : $('#hat-content path')
    });
  });
  afterEach(function () {
    fixture.cleanup();
  });
  it('Should be an actor', function () {
    expect(wizardHatActor).to.be.a(Actor);
  });
  it('Is hidden by default', function () {
    expect(wizardHatActor.els.hat.hasClass('hat')).to.be(true);
  });
  it('Should presentate for card scene', function (done) {
    isAnimating = true;
    actualScene = scenes.card;
    Q.fcall(wizardHatActor.start.bind(wizardHatActor), function () {
      expect().fail("Failed to start wizard hat actor");
    }).done(function () {
      expect(wizardHatActor.els.hat.hasClass('hat presentate-hat ' + scenesClass[actualScene])).to.be(true);
      done();
    });
  });
});
