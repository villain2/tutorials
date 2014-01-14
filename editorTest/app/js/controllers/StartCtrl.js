(function( Controllers, undefined ) 
{
	Controllers.StartCtrl = function ($scope, $routeParams, $location)
	{
		aler('what?');
		console.log('start StartCtrl');
		var scope 				= $scope;
		var parentScope			= $scope.$parent;

		scope.location 			= $location;
		scope.routeParams 		= $routeParams;

		//controller functions

		scope.update = function () 
		{
			console.log('update stuff');
		}

		scope.add = function ()
		{
			console.log('add stuff');
		}
	}
}( EditorTest.Controllers = EditorTest.Controllers || {} ));