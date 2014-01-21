(function(Controllers, undefined)
{
	Controllers.MainCtrl = function ($scope, $attrs, $element)
	{
		console.log('show main controller');
		var scope 				= $scope;

		scope.type 				= $attrs.type;
		scope.instanceID 		= parseInt($attrs.instanceid);

		//initiate box2d
		var b2Vec2				= Box2D.Common.Math.b2Vec2;
		console.log(b2Vec2);
	}
}(VirtualShapes.Controllers = VirtualShapes.Controllers || {} ));