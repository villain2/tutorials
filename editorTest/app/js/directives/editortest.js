(function ( Directives, undefined) 
{
	EditorTest.Modules.EditorTest.directive('editortest', function ($rootScope) 
	{
		//var editorPath			= EditorTest.PartialsPath + '/partial2.html';

		return {
			restrict: 'E',
			transclude: false,
			scope: {instanceid: '@instanceid', type: '@type'}
		}
	});
}( EditorTest.Directives = EditorTest.Directives || {} ));