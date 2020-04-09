/*function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.8722, -87.6188);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'shamrock.png'
	});

	var contentString = '<h1>Grant Park</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate 
  odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? 
  Ipsam, atque nobis rem.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});

}

google.maps.event.addDomListener(window, 'load', init); */

function init() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.932112, -87.688162);
  var mapOptions = {
    center: myLocation,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'satellite', 'terrain'],
      position: google.maps.ControlPosition.TOP_CENTER
    }
  };

  var locals = [
    ['iO Theater', 41.908687, -87.651731, 1],
    ['Annoyance Theatre', 41.939901, -87.651324, 2],
    ['CIC Theater', 41.954622, -87.665159, 1],
    ['The Playground Theater', 41.940447, -87.649129, 1],
    ['Second City', 41.911782, -87.634953, 1],
    ['Whole Foods Market', 41.940128, -87.668193, 1],
    ['Walmart Supercenter', 41.911857, -87.742812, 1],
    ['Xsport Fitness', 41.939225, -87.709186, 1],
    ['Challengers Comics', 41.915384, -87.687192, 1]
  ];

  var myMap = new google.maps.Map(el, mapOptions);

  for (var i = 0; i < locals.length; i++) {
    var local = locals[i];
    var marker = new google.maps.Marker({
      position: {
        lat: local[1],
        lng: local[2]
      },
      map: myMap,
      animation: google.maps.Animation.DROP,
      icon: 'laughing.png',
      title: local[0],
      zIndex: local[3]
    });
  }
}
