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

	VirtualShapes.init = function (params)
	{
		console.log('shape box dim: ' + 800/3);
		console.log('shape box dim: ' + 600/3);

		angular.bootstrap(params.container, ["virtualshapes"]);
	};
}(window.VirtualShapes	= window.VirtualShapes || {} ));