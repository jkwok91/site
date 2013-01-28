$(window).load(function(){
    activeNav();
    gohome();
});


function activeNav(){
    $('.nav ol li').each(function(){
        var theName = $(this).text();
	 console.log(theName);
        $(this).attr('onClick','go'+theName+'()');
    });
    $('.nav ol li').click(function(){
        $('.nav li').attr('id','');
        $(this).attr('id','current');
    });
}

function gohome(){
        $('#content').css('overflow-x','visible').html('<div class="pix" id="left"></div><div class="pix" id="right"></div>');
        $('<img src="img/front_3.jpg" height=640/>').appendTo('#left');
	 $('<img src="img/front_2.jpg" height=640/>').appendTo('#right');
	 $('.pix').fadeIn(1500);
	 $('.nav').attr('class','nav home');
}

function goabout(){
	 $('#content').css('overflow-x','visible').html('\
		<div class="pix" id="left"></div> \
		<div id="about"> \
			<h1>JESSICA KWOK</h1> \
			<h2>Artist Statement</h2> \
			<div id="aState"> \
				<p> \
					In creating art, I hope to document the fleeting moments of beauty that we tend to disregard when we are enduring much less forgiving stages of life.  In preserving the irretrievable, I deliver a memory as a memory.  Living in the past is inconducive; thus the idea is to allow a bridge from better times to the current and inescapable present. \
				</p> \
			</div> \
			<h2><a href="cv_Kwok_Jessica.pdf" target="_blank">Resume</a></h2> \
			<h2><a href="mailto:jk3405@nyu.edu" target="_blank">Contact</a></h2> \
		</div>');
	 $('.nav').attr('class','nav norm').hide();
	 $('<img src="img/front_1.jpg" height=640/>').appendTo('.pix');
	 $('.pix').fadeIn(1500).mouseover(function(){$('.nav').fadeIn(250);});
	 $('#about').mouseover(function(){$('.nav').fadeOut(500);});
}

function gophoto(){
	var set_id = "72157632118362798";
	isGallery(set_id);
}

function gopaint(){
	var set_id = "72157632118375368";
	isGallery(set_id);
}

function isGallery(set_id){
	$('.nav').attr('class','nav norm');
	$('#content').css('overflow-x','scroll').html('\
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
	$('#footer').mouseover(function(){$('.nav').fadeIn(250);});
	$('#images').mouseleave(function(){$('.nav').fadeIn(250);});
	$('#images').mouseover(function(){$('.nav').fadeOut(500);});
}

