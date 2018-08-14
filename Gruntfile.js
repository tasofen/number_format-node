module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			build: {
				options: {
					output: {comments: 'all'}
				},
				files: {
					"dist/number-format.min.js": "src/number-format.js"
				}
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: "*", 
				dest: "./dist/"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.registerTask("default", ["copy", "uglify"]);
}
