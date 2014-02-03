
/** configs **/
(function (Configs, undefined) 
{
	DesignPattern.Modules.DesignPattern.config(function ($routeProvider)
	{
		$routeProvider.
		when('/new',
		{
			controller: DesignPattern.Controllers.TheShizzle,
			templateUrl: DesignPattern.Partials + '/theshizzle.html'
		});
	});
}( DesignPattern.Configs = DesignPattern.Configs || {} ));