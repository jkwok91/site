var map;

function makeMap(){
	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(40.745721,-73.89871),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	google.maps.event.addListener(map, 'click', function(event){placeMarker(event.latLng);});
}

function placeMarker(location){
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	var info = new google.maps.InfoWindow();
	info.setContent(location.lat()+" ,"+location.lng());
	info.setPosition(location);
	info.open(map);
}