module.exports = function (grunt) {
	require("time-grunt")(grunt);
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
            grunt: {
                files: ['GruntFile.js']
            },
            sass: {
                files: 'app/sass/*.scss',
                tasks: ['sass']
            }
        },
        sass: {
			options: {
				includePaths: ['/app/sass']
			},
			dist: {
				options: {
					//outputStyle: 'compressed'
				},
				files: {
					'app/css/custom.css': 'app/sass/custom.scss'
				}
			}
		}

	});

	//build task
	grunt.registerTask('build', 'EditorTest Build Script', function () {
		//alert
	});

	grunt.registerTask('server', ['watch']);

	grunt.registerTask('default', ['sass']);
}