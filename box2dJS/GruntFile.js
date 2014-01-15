module.exports = function (grunt)
{
	require("time-grunt")(grunt);
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n',
				banner: '/** ' +
				'Box2D JS Test JavaScript Class v<%= pkg.version %> \n' +
				'c. 2014, K.C. Hunter \n' +
				'Connections Education \n' +
				'-- Test class for Box2D JS \n' +
				'**/ \n\n'
			},
			dist: {
				src: ['app/js/js/mondernizr.js', 'app/js/foundatin.min.js', 'app/js/jquery.js', 'app/js/Main.js'],
				dest: 'app/js/Box2d.js'
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

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');

	//build task
	grunt.registerTask('build', 'Box2DTest Build Script', function ()
	{
		//build script
	});

	grunt.registerTask('default', ['sass', 'concat']);
}