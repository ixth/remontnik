angular.module('portfolio.directives', [])
	.directive('background', function (staticHost) {
		return function(scope, element, attrs){
			element.css('background-image', 'url(' + staticHost + attrs.background +')');
		};
	});
