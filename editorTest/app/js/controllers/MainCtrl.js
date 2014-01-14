(function( Controllers, undefined )
{
	Controllers.MainCtrl = function ($scope, $attrs, $element)
	{
		console.log('show main controller');
		var scope 					= $scope;

		scope.type					= $attrs.type;
		scope.instanceID			= parseInt($attrs.instanceid);

		console.log('track this');

		function doSomething () {
			console.log('do something');
			var x 			= 1;
			var y  			= -10;
		}
	};
}( EditorTest.Controllers = EditorTest.Controllers || {} ));