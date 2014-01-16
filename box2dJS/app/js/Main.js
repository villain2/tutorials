/*
Box2D Test
author thekchunter@gmail.com
c. 2014
Connections Education
*/
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
		bodyDef.type			= b2Body.b2_staticBody;
		fixDef.shape			= new b2PolygonShape;
		
		fixDef.shape.SetAsBox(20, 2);
		bodyDef.position.Set(10, 600/30 + 1.8);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		bodyDef.position.Set(10, -1.8);
		world.CreateBody(bodyDef).CreateFixture(fixDef);

		fixDef.shape.SetAsBox(2, 14);
		bodyDef.position.Set(-1.8, 13);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		bodyDef.position.Set(21.8, 13);
		world.CreateBody(bodyDef).CreateFixture(fixDef);

		//create some objects
		bodyDef.type 			= b2Body.b2_dynamicBody;
		for(var i = 0; i < 10; i++) 
		{
			if(Math.random() > 0.5)
			{
				fixDef.shape	= new b2PolygonShape;
				fixDef.shape.SetAsBox(Math.random() + 0.1, Math.random() + 0.1); //half width and height
			}
			else 
			{
				fixDef.shape	= new b2CircleShape(Math.random() + 0.1);//radius
			}
			bodyDef.position.x 		= Math.random() * 10;
			bodyDef.position.y		= Math.random() * 10;
			world.CreateBody(bodyDef).CreateFixture(fixDef);
		}

		//setup debug draw
		var debugDraw			= new b2DebugDraw();
		debugDraw.SetSprite(document.getElementById("displayArea").getContext("2d"));
		debugDraw.SetDrawScale(30.0);
		debugDraw.SetFillAlpha(0.5);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
		world.SetDebugDraw(debugDraw);

		window.setInterval(update, 1000 / 60);

		//mouse
		var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
		var canvasPosition			= getElementPosition(document.getElementById('displayArea'));
		console.log(canvasPosition);

		document.addEventListener("mousedown", function (e)
		{
			isMouseDown			= true;
			handleMouseMove(e);
			document.addEventListener("mousemove", handleMouseMove, true);
		}, true);

		document.addEventListener("mouseup", function () 
		{
			document.removeEventListener("mousemove", handleMouseMove, true);
			isMouseDown			= false;
			mouseX				= undefined;
			mouseY				= undefined;
		}, true);

		function handleMouseMove(e)
		{
			mouseX				= (e.clientX - canvasPosition.x) / 30;
			mouseY 				= (e.clientY - canvasPosition.y) / 30;
		}

		function getBodyAtMouse()
		{
			mousePVec			= new b2Vec2(mouseX, mouseY);
			var aabb 			= new b2AABB();
			aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
			aabb.upperBound.Set(mouseY - 0.001, mouseY - 0.001);

			//check for collisions or overlapping shapes
			selectedBody 		= null;
			world.QueryAABB(getBodyCB, aabb);
			return selectedBody;
		}

		function getBodyCB(fixture)
		{
			if(fixture.GetBody().GetType() != b2Body.b2_staticBody)
			{
				if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec))
				{
					selectedBody		= fixture.GetBody();
					return false;
				}
			}
			return true;
		}


		//update
		function update()
		{
			//console.log('update');
			if(isMouseDown && (!mouseJoint))
			{
				var body 			= getBodyAtMouse();
				if(body)
				{
					var md 					= new b2MouseJointDef();
					md.bodyA 				= world.GetGroundBody();
					md.bodyB 				= body;
					md.target.Set(mouseX, mouseY);
					md.collideConnected 	= true;
					md.maxForce 			= 300.0 * body.GetMass();
					mouseJoint 				= world.CreateJoint(md);
					body.SetAwake(true);
				}
			}

			if(mouseJoint)
			{
				if(isMouseDown)
				{
					mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
				}
				else
				{
					world.DestroyJoint(mouseJoint);
					mouseJoint 				= null;
				}
			}

			world.Step(1 / 60, 10, 10);
			world.DrawDebugData();
			world.ClearForces();
		}

		//helpers

		function getElementPosition(element)
		{
			//set variables
			var elem 		= element,
			tagname			= "",
			x 				= 0,
			y 				= 0;

			while( (typeof(elem) == "object") && (typeof(elem.tagName) != "undefined") )
			{
				y 			+= elem.offsetTop;
				x 			+= elem.offsetLeft;
				tagname 	= elem.tagName.toUpperCase();

				if(tagname == "BODY")
				{
					elem 		= 0;
				}

				if(typeof(elem) == "object")
				{
					if(typeof(elem.offsetParent) == "object")
					{
						elem 		= elem.offsetParent;
					}
				}
				console.log('x: ' + x + ' / y: ' + y);
				return {x: x, y: y};
			}
		};
	}
}(window.Box2DTest = window.Box2DTest || {} ));

$(document).ready(function () 
{
	Box2DTest.init();
})

