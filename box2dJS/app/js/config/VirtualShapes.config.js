/*** CONFIG ***/
(function( Configs, undefined)
{
	VirtualShapes.Modules.VirtualShapes.config(['$routeProvider', function ($routeProvider)
	{
		$routeProvider.
		otherwise(
		{
			redirectTo: '/'
		})
	}])
}(VirtualShapes.Configs = VirtualShapes.Configs || {} ));