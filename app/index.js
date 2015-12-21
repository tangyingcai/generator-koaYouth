'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KoaYouthGenerator = module.exports = function KoaYouthGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
  this.basename = path.basename(process.cwd());
};

util.inherits(KoaYouthGenerator, yeoman.generators.Base);

KoaYouthGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  cb();
};

KoaYouthGenerator.prototype.app = function app() {
  this.mkdir('lib');
  this.mkdir('controllers');
  this.mkdir('public/css');
  this.mkdir('public/js');
  this.mkdir('src/css');
  this.mkdir('src/js');
  this.mkdir('views');
  this.mkdir('test');

  this.copy('layout.html', 'views/layout.html');
  this.copy('list.html', 'views/list.html');
  this.copy('style.css', 'src/css/style.css');
  this.copy('app.js', 'app.js');
  this.copy('gulpfile.js', 'gulpfile.js');
  this.copy('_package.json', 'package.json');
};

KoaYouthGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
