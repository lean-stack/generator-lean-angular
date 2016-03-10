'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-lean-angular:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      '.bowerrc',
      'package.json',
      'gulpfile.js',
      'README.md',
      'LICENSE',
      'src/index.html',
      'src/scripts/app.module.js'
    ]);
  });
});
