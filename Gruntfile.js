module.exports = function(grunt) {

	// Load all NPM grunt tasks
  	grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-postcss');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
			      sourcemap: 'none'
			    },
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['style.scss'],
					dest: './',
					ext: '.css'
				}]
			}
		},

		postcss: { // Begin Post CSS Plugin
		  options: {
		    map: false,
		    processors: [
		  	require('autoprefixer')({
		        browsers: ['last 2 versions']
		      })
			]
		  },
		  dist: {
		    src: 'style.css'
		  }
		},

		cssmin: { // Begin CSS Minify Plugin
		  target: {
		    files: [{
		      expand: true,
		      src: ['style.css'],
		      dest: './',
		      ext: '.min.css'
			}]
		  }
		},

		uglify: { // Begin JS Uglify Plugin
		  build: {
		    src: ['js/*.js'],
		    dest: 'script.min.js'
		  }
		},

		watch: { // Compile everything into one task with Watch Plugin
	      css: {
	        files: '**/*.scss',
	        cwd: 'scss',
	        tasks: ['sass', 'postcss', 'cssmin']
	      },
	      js: {
	        files: 'js/*.js',
	        tasks: ['uglify']
	      }
	    },

	    // gitadd: {
     //        task: {
     //            options: {
     //                verbose: true,
     //                force: false
     //            },
     //            files: {
     //                src: ['*']
     //            }
     //        }
     //    },

     //    gitpush: {
     //        origin: {
     //            options: {
     //                verbose: true,
     //                quiet: false,
     //                remote: 'origin',
     //                branch: 'master'
     //            }
     //        }
     //    },

     //    gitpull: {
     //        origin: {
     //            options: {
     //                verbose: true,
     //                quiet: false,
     //                remote: 'origin',
     //                branch: 'master'
     //            }
     //        }
     //    },

     //    // prompt for a commit message
     //    prompt: {
     //        commit: {
     //            options: {
     //                questions: [{
     //                    config: 'gitmessage',
     //                    type: 'input',
     //                    message: 'Commit Message'
     //                }]
     //            }
     //        }
     //    },

     //    gitcommit: {
     //        'src-master': {
     //            options: {
     //                verbose: true,
     //                message: '<%=grunt.config("gitmessage")%>',
     //                noVerify: true,
     //                noStatus: false,
     //                ignoreEmpty: true
     //            },
     //            files: {
     //                src: ['.']
     //            }
     //        }
     //    },

	});
	
	grunt.registerTask('default', ['watch'] );
	// grunt.registerTask('push', ['gitadd', 'prompt:commit', 'gitcommit', 'gitpush:origin']);
	
};