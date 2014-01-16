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
		var b2Fixture 			= Box2D.Dynamics.b2Fixture;
		var b2World				= Box2D.Dynamics.b2World;
		var bwMassData			= Box2D.Collision.Shapes.b2MassData;
		var b2PolygonShape		= Box2D.Collision.Shapes.b2PolygonShape;
		var b2CircleShape		= Box2D.Collision.Shapes.b2CircleShape;
		var b2DebugDraw			= Box2D.Dynamics.b2DebugDraw;
		var b2MouseJointDef		= Box2D.Dynamics.Joints.b2MouseJointDef;

		var world 				= new b2World(
			new b2Vec2(0, 10), true
		);

		var fixDef 				= new b2FixtureDef;
		fixDef.density			= 1.0;
		fixDef.friction			= 0.5;
		fixDef.restitution		= 0.2;

		var bodyDef 			= new b2BodyDef;

		//create ground
	}
}(window.Box2DTest = window.Box2DTest || {} ));

$(document).ready(function () 
{
	Box2DTest.init();
})

