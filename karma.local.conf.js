module.exports = function(config) {
  config.set({
    //logLevel: 'LOG_DEBUG',

    reporters: ['spec', 'coverage'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun : true,

    autoWatch : false,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    port: 9876,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'fixture'
    ],

    files: [{
        pattern:  './test/**/*.fixture.html'
      },
      './node_modules/materialize-css/font/*',
      './node_modules/timelinejs/build/css/timeline.css',
      './node_modules/materialize-css/bin/materialize.css',
      './styles/**/*.css',
      './test/styles-test.css',
      './node_modules/expect.js/index.js',
      './vendors.js',
      './js/actor.js',
      './js/scenes.js',
      './js/actors/card.js',
      './js/actors/welcome.js',
      './js/actors/explotion.js',
      './js/actors/wizardHat.js',
      './js/actors/wand.js',
      './js/actors/magicBlast.js',
      './js/scenes/cardEscene.js',
      './js/actors/timeline.js',
      './js/actors/educationCard.js',
      './js/scenes/experience.js',
      './js/actors/panelSkills.js',
      './js/actors/projects.js',
      './js/scenes/skills.js',
      './js/scenes/education.js',
      './js/scenes/labs.js',
      './js/commons.js',
      './js/enums.js',
      './js/precalculate.js',
      './js/index.js',
      'test/actorSpec/actor.test.js',
      'test/hatSpec/hat.test.js'
    ],

    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },

    // list of files to exclude
    exclude: [],

    preprocessors: {
      'js/**/*.js': ['coverage'],
      'test/**/*.fixture.html': ['html2js']
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html'},
        //{ type: 'text'},
        { type: 'lcov', subdir: 'lcov/'}
      ],
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      },
      instrumenter: {
        'test/**/*.js': 'istanbul'
      },
      includeAllSources: true
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS2'//, 'Firefox'
    ]

  });
};
