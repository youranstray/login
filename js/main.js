require.config({
	// baseUrl:'login/js',
	paths: {
		jquery: 'jquery-2.1.1',
		placeholder: 'jquery.placeholder',
		domReady: 'domReady',
		cookieutil: 'cookieUtil',
		checkbox: 'checkbox',
		typeahead: 'bootstrap3-typeahead'
	},
	shim: {
		'jquery': {
			export: '$'
		},
		'placeholder': {
			deps: ['jquery'],
			export: 'placeholder'
		},
		'checkbox': {
			deps: ['jquery'],
			export: 'checkboxs'
		},
		'typeahead': {
			deps: ['jquery'],
			export: 'typeahead'
		}
	},
	urlArgs: "_dc" + (new Date()).getTime()
});

require([
	'domReady',
	'jquery',
	'placeholder',
	'checkbox',
	'cookieutil',
	'typeahead'
],
	function(domReady, $, placeholder, checkbox, cookieutil){
		
	});