/***************************************\

	kyco-cp-theme
	=============

	Version 1.1.1

	Brought to you by
	http://www.kycosoftware.com/

	Copyright 2014 Cornelius Weidmann

	Distributed under the GPL

\***************************************/

$(window).load(function() {
	// Remove sidebar because we don't need it, also it breaks layout in Chrome
	$('#sideBar').remove();

	// Unbind all events from default ee_navigation script
	$('#navigationTabs').unbind();
	$('#navigationTabs li').unbind();

	// Decrease z-index by one for each list item, so that on small screens
	// one can still use menu properly
	var zIndexMax = 100;

	$('#navigationTabs > li.parent').each(function() {
		$(this).css('z-index', zIndexMax);
		zIndexMax--;
	});

	// Attach new functionality
	$('#navigationTabs > li.parent').hover(function() {
		$(this).addClass('active');
	}, function() {
		var _this          = $(this);
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
