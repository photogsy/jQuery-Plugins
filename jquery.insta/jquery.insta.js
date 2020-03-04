; (function ($) {
	$.fn.insta = function () {
		$('.insta').each(function () {
			var $el = $(this)
			var accountid = $el.data('accountid')
			var count = $el.data('count') || 6
			var url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables=%7B%22id%22%3A%22${accountid}%22%2C%22first%22%3A${count}%7D`
			$.get(url, function (data) {
				for (var i = 0; i < count; i++) {
					var imgUrl = data.data.user.edge_owner_to_timeline_media.edges[i].node.display_url
					var caption = data.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text
					var div = document.createElement('div')
					div.setAttribute('style', `background-image: url('${imgUrl}')`)
					div.setAttribute('class', 'insta-tile')
					$el.append(div)
				}
			})
		})
	}
})(jQuery);