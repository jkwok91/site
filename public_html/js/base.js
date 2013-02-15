$(window).load(function() {
    activeNav();
    gohome();
});


function activeNav(){
    nItem = $('div.nav ol li');
    nItem.each(function() {
        var theName = $(this).text();
        $(this).attr('onClick','go'+theName+'()');
    });
    nItem.click(function(){
        nItem.attr('id','');
        $(this).attr('id','current');
    });
}

function gohome(){
    $('div#content').css('overflow-x','visible').html('<div class="pix" id="left"></div><div class="pix" id="right"></div>');
    $('<img src="img/front_3.jpg" height=640/>').appendTo('#left');
    $('<img src="img/front_2.jpg" height=640/>').appendTo('#right');
    $('div.pix').fadeIn(1500);
    $('div.nav').attr('class','nav home');
}

function goabout(){
    $('div#content').css('overflow-x','visible').html('\
        <div class="pix" id="left"></div> \
        <div id="about"> \
            <h1>JESSICA KWOK</h1> \
            <h2>Artist Statement</h2> \
            <div id="aState"> \
                <p> \
                I hope to document the fleeting moments of beauty that we often disregard when we are enduring much less forgiving stages of life. \
                </p> \
                <p> \
                In preserving the irretrievable, I deliver a memory as a memory.  Living in the past is inconducive; thus the idea is to allow a bridge from better times to the inescapable present. \
                </p> \
                <br /> \
                <p> \
                I have a BA in mathematics from NYU Courant.  People often ask if I am trying to incorporate math into art.  I say no, because they are simultaneously separate things and also already the same thing. \
                </p> \
            </div> \
            <h2><a href="cv_Kwok_Jessica.pdf" target="_blank">Resume</a></h2> \
            <h2><a href="mailto:jk3405@nyu.edu" target="_blank">Contact</a></h2> \
        </div>');
    $('div.nav').attr('class','nav norm').hide();
    $('<img src="img/front_1.jpg" height=640/>').appendTo('div.pix');
    $('div.pix').fadeIn(1500).mouseover(function(){$('div.nav').fadeIn(250);});
    $('div#about').mouseover(function(){$('div.nav').fadeOut(500);});
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
