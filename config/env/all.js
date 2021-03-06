'use strict';

module.exports = {
	app: {
		title: 'PRO SERVICE',
		description: 'PRO SERVICE WEBSITE',
		keywords: 'PROCUREMENT, SAFETY MATERIALS, EQUIPMENTS, FABRICATION'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/Progress.js/src/progressjs.css',
				'public/lib/Progress.js/minified/progressjs.min.css',
				'public/lib/angular-material/modules/css/angular-material-layouts.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-aria/angular-aria.js', 
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-material/angular-material.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-scroll-progress-meter/scroll-progress-meter.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/Progress.js/src/progress.js',
				'public/lib/Progress.js/minified/progress.min.js',
				'public/lib/angular-google-maps/dist/angular-google-maps.js'

			]			
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};