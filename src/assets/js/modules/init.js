/* ***** ----------------------------------------------- ***** **
** ***** Init JS
** ***** ----------------------------------------------- ***** */

/* global Main */
(function($){
	'use strict';

	Main.modules.init = function() {

		// For each module in Main, call the init function

		$.each(Main.modules, function(moduleName, moduleFunction) {
			if (moduleName != 'init' && $.isFunction(moduleFunction().init)) {
				moduleFunction().init();
			}
		});

	};

})(jQuery);
