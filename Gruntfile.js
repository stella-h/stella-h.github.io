module.exports = function(grunt) {
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  sass: {
   dist: {
    files: {
     'style/stylesheet.css': 'scss/main.scss'
    }
   }
  },
  watch: {
   css: {
    files: '**/*.scss',
    tasks: ['sass']
   }
  }
 });
 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.registerTask('w', ['watch']);
 grunt.registerTask('compile', ['sass']);
}
