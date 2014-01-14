(function( Controllers, undefined ) 
{
	Controllers.SecondCtrl = function ($scope, $routeParams, $location)
	{
		console.log('Start SecondCtrl');
		var scope 				= $scope;
		var parentScope			= $scope.$parent;

		scope.location 			= $location;
		scope.routeParams 		= $routeParams;

		console.log(scope);
		console.log('parent scope: ' ); console.log(parentScope);

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