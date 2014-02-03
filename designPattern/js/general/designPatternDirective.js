/** directives **/
(function ( Directives, undefined ) 
{
	DesignPattern.Modules.DesignPattern.directive("designpatterns", function () 
	{
		console.log('we got to this directive');
		return {
			restrict: 'E',
			transclute: true,
			template: '<div><h1>Hi!</h1></div>',
			replace: true,
			controller: DesignPattern.Controllers.MainCtrl,
			link: function (scope, elm, attrs)
			{
				var container 		= elm.find('.stage')[0];
			}
		}
	});
}(DesignPattern.Directives = DesignPattern.Directives || {} ));