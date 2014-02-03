'use strict';

(function ( DesignPattern, undefined ) 
{

	DesignPattern.Version 			= '1.0.0';
	DesignPattern.Partials			= '/partials';
	DesignPattern.Modules			= {};
	DesignPattern.Configs 			= {};
	DesignPattern.Services 			= {};
	DesignPattern.Controllers 		= {};
	DesignPattern.Directives 		= {};

	DesignPattern.init = function ( params )
	{
		console.log(params);
		params.container.innerHTML 		= '<designpatterns><div data-ng-view></div></designpatterns>';

		angular.bootstrap(params.container, ['designPatterns']);
	};
}(window.DesignPattern = window.DesignPattern || {} ));

