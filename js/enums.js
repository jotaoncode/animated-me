var scenes = {
  experience: 'experience',
  skills: 'skills',
  education: 'education',
  card: 'card',
  labs: 'labs'
};
var scenesClass = {
  experience: 'experience-scene',
  skills: 'skills-scene',
  education: 'education-scene',
  card: 'card-scene',
  labs: 'labs-scene'
};
var scenesInstances = {
  card: animationCardScene,
  skills: skillsScene,
  education: educationScene,
  labs: labsScene,
  experience: experienceScene
};
var actualScene = '',
isAnimating = false,
alreadyAnimated = [];
