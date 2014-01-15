(function( Box2DTest, undefined) 
{
	Box2DTest.Version			= "1.0.0";
	Box2DTest.Controllers 		= {};
	Box2DTest.Directives		= {};

	Box2DTest.init = function ()
	{
		var b2Vec2				= Box2D.Common.Math.b2Vec2;
		var b2AABB				= Box2D.Collision.b2AABB;
		var b2BodyDef			= Box2D.Dynamics.b2BodyDef;
		var b2Body 				= Box2D.Dynamics.b2Body;
		var b2FixtureDef		= Box2D.Dynamics.b2FixtureDef;
	}
}(window.Box2DTest = window.Box2DTest || {} ));

$(document).ready(function () 
{
	Box2DTest.init();
})

