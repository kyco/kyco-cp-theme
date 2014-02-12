/*!
 * @author	Cornelius Weidmann
 */

$(window).load(function() {
	// Remove sidebar because it breaks layout in Chrome
	$('#sideBar').remove();

	// Unbind all events from default ee_navigation script
	$('#navigationTabs').unbind();
	$('#navigationTabs li').unbind();

	// Attach new functionality
	$('#navigationTabs > li.parent').hover(function() {
		$(this).addClass('active');
	}, function() {
		var _this = $(this);
		var listItemParent = _this.parents('ul#navigationTabs').find(_this.parents('li.parent'));

		if (listItemParent.length !== -1) {
			listItemParent.removeClass('active');
		}

		$('ul#navigationTabs > li.parent').each(function() {
			if (_this.hasClass('active')) {
				_this.removeClass('active');
			}
		});
	});
});
