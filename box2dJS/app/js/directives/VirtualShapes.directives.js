(function( Directives, undefined)
{
	VirtualShapes.Modules.VirtualShapes.directive('virtualshapes', function ()
	{
		return {
			restrict: 'E',
			transclude: false,
			scope: {instanceid: '@instanceid', type: '@type'},
			replace: true,
			controller: VirtualShapes.Controllers.MainCtrl,
			link: function (scope,elm,attrs)
			{

			}
		}

	});
}( VirtualShapes.Directives = VirtualShapes.Directives || {} ));