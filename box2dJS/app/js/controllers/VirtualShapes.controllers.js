(function(Controllers, undefined)
{
	Controllers.MainCtrl = function ($scope, $attrs, $element)
	{
		console.log('show main controller');
		var scope 				= $scope;

		scope.type 				= $attrs.type;
		scope.instanceID 		= parseInt($attrs.instanceid);

		//made a cube
		var renderer 			= new THREE.WebGLRenderer();
		renderer.setSize(800, 600);
		document.getElementById('appContainer').appendChild(renderer.domElement);

		var camera 				= new THREE.PerspectiveCamera( 45, 800 / 600, 1, 1000 );
		camera.position.y 		= -450;
		camera.position.z 		= 400;
		camera.rotation.x 		= 0.75;

		var scene 				= new THREE.Scene();
		var plane 				= new THREE.Mesh(new THREE.PlaneGeometry( 300,300, 8, 8 ), new THREE.MeshBasicMaterial());
		scene.add(plane);

		var geometry 			= new THREE.CubeGeometry( 100, 100, 100);
		var cubeObj 			= new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ));
		cubeObj.position.x 		= 100;
		cubeObj.position.y 		= -200;
		cubeObj.position.z   	= 50;

		cubeObj.rotation.x 		= 45;
		cubeObj.rotation.y 		= 30;
		cubeObj.rotation.z 		= 0;

		cubeObj.addEventListener("mousedown", function () 
		{
			alert('box clicked');
		}, false);

		scene.add(cubeObj);



		renderer.render(scene, camera);



		/*//shortcuts to Box2D
		var box2D 				= {
			b2Vec2 : Box2D.Common.Math.b2Vec2,
			b2BodyDef : Box2D.Dynamics.b2BodyDef,
			b2Body : Box2D.Dynamics.b2Body,
			b2FixtureDef : Box2D.Dynamics.b2FixtureDef,
			b2Fixture : Box2D.Dynamics.b2Fixture,
			b2World : Box2D.Dynamics.b2World,
			b2MassData : Box2D.Collision.Shapes.b2MassData,
			b2PolygonShape : Box2D.Collision.Shapes.b2PolygonShape,
			b2CircleShape : Box2D.Collision.Shapes.b2CircleShape,
			b2DebugDraw : Box2D.Dynamics.b2DebugDraw
		};

		//convert scale from pixels to meters
		var SCALE 				= 30;
		var stage, world;

		function init()
		{
			//set up easeljs world
			stage 			= new createjs.Stage(document.getElementById('displayArea'));
			setupPhysics();

			document.getElementById('displayArea').addEventListener("mousedown", function ()
			{
				
				//create ground
				var fixDef 			= new box2D.b2FixtureDef();
				fixDef.density 		= 1;
				fixDef.friction 	= 0.5;
				fixDef.restitution 	= 0.5;

				//define the body, static (not effected by forces) or dynamic 
				var bodyDef 		= new box2D.b2BodyDef();
				bodyDef.type 		= box2D.b2Body.b2_dynamicBody;
				bodyDef.position.x 	= Math.random()*800 / SCALE;
				bodyDef.position.y 	= 0;
				bodyDef.angle 		= 45;
				fixDef.shape 		= new box2D.b2PolygonShape();
				fixDef.shape.SetAsBox(50 / SCALE, 30 / SCALE);
				world.CreateBody(bodyDef).CreateFixture(fixDef);
			}, false);

		}


		function setupPhysics()
		{
			world 				= new box2D.b2World(new box2D.b2Vec2(0, 50), true); //use b2Vec2 to set gravity in the world on x and y axis. Allow sleep for objects not moving (set to true)

			//create ground
			var fixDef 			= new box2D.b2FixtureDef();
			fixDef.density 		= 1;
			fixDef.friction 	= 0.5;

			//define the body, static (not effected by forces) or dynamic 
			var bodyDef 		= new box2D.b2BodyDef();
			bodyDef.type 		= box2D.b2Body.b2_staticBody;
			bodyDef.position.x 	= 400 / SCALE;
			bodyDef.position.y 	= 600 / SCALE;
			fixDef.shape 		= new box2D.b2PolygonShape();
			fixDef.shape.SetAsBox(400 / SCALE, 20 / SCALE); //set as box, remember width is half of the actual canvas divided by the SCALE value
			world.CreateBody(bodyDef).CreateFixture(fixDef);


			//setup debug draw for box2D objects so you can see them
			var debugDraw 		= new box2D.b2DebugDraw();
			debugDraw.SetSprite(stage.canvas.getContext('2d')); // get context of canvas from createjs
			debugDraw.SetDrawScale(SCALE);
			debugDraw.SetFlags(box2D.b2DebugDraw.e_shapeBit | box2D.b2DebugDraw.e_jointBit);//show joints 
			world.SetDebugDraw(debugDraw);


		}

		function tick()
		{
			stage.update(); //update stage
			world.DrawDebugData(); //tell box2d to draw on canvas
			world.Step(1/60, 10, 10); // set framerate, velocity iterations - higher numbers make more accurate physics simulation, position iterations
			world.ClearForces();
		}
		init();*/
	}
}(VirtualShapes.Controllers = VirtualShapes.Controllers || {} ));