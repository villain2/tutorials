(function( EditorTest, undefined ) 
{
	EditorTest.Version 					= "1.0";
	EditorTest.PartialsPath				= "partials/";
	EditorTest.instanceCache			= [];
	EditorTest.ResetInstanceCache		= [];
	EditorTest.Modules 					= {};
	EditorTest.Configs 					= {};
	EditorTest.Controllers 				= {};
	EditorTest.Directives				= {};

	EditorTest.init = function (params, callback) {

        console.log('module: ' );
        console.log(EditorTest.Modules);
		var instanceID					= EditorTest.instanceCache.length;
		EditorTest.instanceCache.push(params.dataJSON);
		EditorTest.ResetInstanceCache.push(JSON.parse(JSON.stringify(params.dataJSON)));
		EditorTest.PartialsPath			= params.partialsPath;

		params.container.innerHTML		= '<editortest instanceid=' + instanceID + ' type=' + params.type + '><div ng-view></div></editortest>';

		//manual way to start angular app --- works the same way as putting ngApp on a div but you're 
		//specifying it programmatically
		angular.bootstrap(params.container, ['editortest']);
	};

	EditorTest.updateWidget = function (params) {
		//update current widget
		EditorTest.Update(params.container, params.widgetData);
	};

}( window.EditorTest = window.EditorTest || {} )); //must set this to window to find the class EditorTest




/*** MODULE ***/
(function( Modules, undefined ) 
{
	//start up angular
	Modules.EditorTest = angular.module('editortest', ['ngRoute']);

}( EditorTest.Modules = EditorTest.Modules || {} ));





/*** CONFIG ***/
(function( Configs, undefined ) 
{
	EditorTest.Modules.EditorTest.config(['$routeProvider', function ($routeProvider) 
	{
		$routeProvider.
		when('/partials/partial1.html', 
		{
			controller: EditorTest.Controllers.StartCtrl,
			templateUrl: EditorTest.PartialsPath + '/partial1.html'
		}).
		when('/partials/partial2.html', 
		{
			controller: EditorTest.Controllers.SecondCtrl,
			templateUrl: EditorTest.PartialsPath + '/partial2.html'
		}).
		otherwise(
		{
			redirectTo: '/'
		})
	}])
}( EditorTest.Configs = EditorTest.Configs || {} ));