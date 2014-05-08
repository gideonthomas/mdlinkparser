module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ["*.js", "test/*.js"]
        },
        mochaTest: {
            test: {
                options: {
                    reporter: "spec"
                },
                src: "test/test.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("default", ["jshint", "mochaTest"]);
};
