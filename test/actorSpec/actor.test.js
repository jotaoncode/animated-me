describe('Actor', function () {
  var actor;

  beforeEach(function () {
    fixture.base = 'test/actorSpec';
    fixture.load('actor.fixture.html');
    actor = new Actor();
  });
  afterEach(function () {
    fixture.cleanup();
  });
  it('Should have an start event defined', function () {
    expect(actor.start).not.to.be(undefined);
  });
  it('Should have an endAnimation event defined', function () {
    expect(actor.endAnimation).not.to.be(undefined);
  });
  it('Set Elements for actor', function () {
    var container = $('.container.page-container');
    expect(actor.setElements).not.to.be(undefined);
    actor.setElements({
      container: container
    });
    expect(actor.els.container).to.be(container);
  });
});
