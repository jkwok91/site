$(window).load(function() {
    activeNav();
});


function activeNav(){
    nItem = $('div.nav ol li');
    nItem.each(function() {
        var theName = $(this).text();
        //$(this).attr('onClick','go'+theName+'()');
    });
    nItem.click(function(){
        nItem.attr('id','');
        $(this).attr('id','current');
    });
}

function isGallery(set_id){
	var navig = $('div.nav');
	navig.attr('class','nav norm');
	$('div#content').css('overflow-x','scroll').html('\
		<div id="leftArr"></div> \
		<div id="images"></div> \
		<div id="rightArr"></div>');
	var URL_str = "http://api.flickr.com/services/rest/?format=json&jsoncallback=?&method=flickr.photosets.getPhotos&api_key=d3142fee7fcfcb2134ce938d1dcffc9f&photoset_id="+set_id;
	$.getJSON(URL_str, function(data){
		$.each(data.photoset.photo, function(i, item){
			var photo = 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_z.jpg';
			$('<img />').attr({src: photo, alt: item.title, title: item.title, height: 640}).appendTo("#images");
		});
	});

	//ANNOYINGLY JUMPY NAVIGATION
	$('div#footer').mouseover(function(){navig.fadeIn(250);});
	$('div#images').mouseleave(function(){navig.fadeIn(250);}).mouseover(function(){navig.fadeOut(500);});
}
