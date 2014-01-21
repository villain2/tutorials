(function(Controllers, undefined)
{
	Controllers.MainCtrl = function ($scope, $attrs, $element)
	{
		console.log('show main controller');
		var scope 				= $scope;

		scope.type 				= $attrs.type;
		scope.instanceID 		= parseInt($attrs.instanceid);

		//initiate box2d and get libraries and variables
		var b2Vec2				= Box2D.Common.Math.b2Vec2;
		var world				= new b2World(new b2Vec2(0, 10), true);

	}
}(VirtualShapes.Controllers = VirtualShapes.Controllers || {} ));