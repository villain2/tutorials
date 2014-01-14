(function ( Directives, undefined) 
{
	EditorTest.Modules.EditorTest.directive('editortest', function () 
	{
		//var editorPath			= EditorTest.PartialsPath + '/partial2.html';

		return {
			restrict: 'E',
			transclude: false,
			scope: {instanceid: '@instanceid', type: '@type'},
			controller: EditorTest.Controllers.MainCtrl,
			link: function (scope, elm, attrs)
			{

			}
		}
	});
}( EditorTest.Directives = EditorTest.Directives || {} ));