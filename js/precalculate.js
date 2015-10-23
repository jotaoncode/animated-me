cardActor.setElements({
  card : $('#card'),
  cardContent: $('#contact_card'),
  contactCard: $('#contact_card>div'),
  profileName: $('#contact_card .profile-content .profile-name'),
  profileImage: $('.sized-profile-image .protrait > img'),
  mailContact: $('.mail-contact span'),
  mailContactIcon: $('.mail-contact i'),
  activity: $('#profile-list > .activity > p'),
  iconFacebook: $('.profile-icon-contact a > span.facebook'),
  iconLinkedin: $('.profile-icon-contact a > span.linkedin'),
  iconGit: $('.profile-icon-contact a > span.git-small'),
  iconTwitter: $('.profile-icon-contact a > span.twitter'),
  locationContact: $('.location-contact span'),
  locationContactIcon: $('.location-contact i')
});
explotionActor.setElements({
  explotionContainer: $('.animation .explotion-container'),
  explotionParticles: $('.animation .explotion-container div')
});

magicBlastActor.setElements({
  magicBlast : $('#magicblast'),
  iconFacebook: $('#contact_card .profile-icon-contact>a>.facebook'),
  iconTwitter: $('#contact_card .profile-icon-contact>a>.twitter'),
  iconLinkedin: $('#contact_card .profile-icon-contact>a>.linkedin'),
  iconGit: $('#contact_card .profile-icon-contact>a>.git-small')
});
wandActor.setElements({
  wand : $('#wand')
});
wizardHatActor.setElements({
  hat : $('#hat'),
  hatContent : $('#hat-content path')
});
welcomeUserActor.setElements({
  paths: $('.welcome svg path, circle, rect'),
  welcome: $('.welcome')
});
welcomeUserActor.initElements();
panelSkills.setElements({
  skillsContainer: $('.skills-content')
})
timelineActor.setElements({
  timeline: $('#my-timeline'),
  timelineContent: $('.timeline-content')
});
educationActor.setElements({
  utn: $('.education-utn'),
  cambridge: $('.education-cambridge')
});
labsActor.setElements({
  trends: $('.labs-trends'),
  spaceTraveller: $('.labs-space-traveller')
});
animationCardScene.setElements({
  title: $('.education-title'),
  skip: $('#skip-card-animation'),
  nextPage: $('.next-page.article-0')
});
experienceScene.setElements({
  title: $('.experience-title'),
  skip: $('#skip-experience-animation'),
  nextPage: $('.next-page.article-1'),
  backPage: $('.back-page.article-1')
});
skillsScene.setElements({
  title: $('.skills-title'),
  skip: $('#skip-skills-animation'),
  nextPage: $('.next-page.article-2'),
  backPage: $('.back-page.article-2')
});
educationScene.setElements({
  title: $('.education-title'),
  skip: $('#skip-education-animation'),
  nextPage: $('.next-page.article-3'),
  backPage: $('.back-page.article-3')
});
labsScene.setElements({
  title: $('.labs-title'),
  skip: $('#skip-labs-animation'),
  nextPage: $('.next-page.article-4'),
  backPage: $('.back-page.article-4')
});
