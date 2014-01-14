(function( Controllers, undefined )
{
	Controllers.MainCtrl = function ($scope, $attrs, $element)
	{
		console.log('show main controller');
		var scope 					= $scope;

		scope.type					= $attrs.type;
		scope.instanceID			= parseInt($attrs.instanceid);

		console.log('track this');
	}
}( EditorTest.Controllers = EditorTest.Controllers || {} ));