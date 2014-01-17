/*
Box2D Test - Virtual 2d/3d Shapes
author thekchunter@gmail.com
c. 2014
Connections Education
*/

(function( VirtualShapes, undefined)
{
	VirtualShapes.Version			= "1.0.0";
	VirtualShapes.Modules 			= {};
	VirtualShapes.Config 			= {};
	VirtualShapes.Controllers 		= {};
	VirtualShapes.Directives 		= {};

	VirtualShapes.init = function ()
	{
		console.log('shape box dim: ' + 800/3);
		console.log('shape box dim: ' + 600/3);

		angular.bootstrap(params.container, ['VSApp'])
	}
}(window.VirtualShapes	= window.VirtualShapes || {} ));

/*** MODULES ***/
(function (Modules, undefined)
{
	//start angular
	Modules.VirtualShapes = angular.module('VSApp', ['ngRoute']);
}(VirtualShapes.Modules = VirtualShapes.Modules || {} ));





/*** CONFIG ***/
(function( Configs, undefined)
{
	VirtualShapes.Modules.VirtualShapes.config(['routeProvider', function ( $routeProvider )
	{
		$routeProvider.
		otherwise(
		{
			redirectTo: '/'
		})
	}])
}(VirtualShapes.Configs = VirtualShapes.Configs || {} ));








$(document).ready(function () 
{
	VirtualShapes.init();
})


