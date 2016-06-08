(function(){

  'use strict';

  var latitudeInput = document.getElementById('js-latitude'),
      longitudeInput = document.getElementById('js-longitude'),
      button = document.getElementById('js-button');

  button.addEventListener('click', function() {
    var latitude, longitude, uri, xhr;

    latitude = latitudeInput.value;
    longitude = longitudeInput.value;

    uri = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';

    xhr = new XMLHttpRequest();

    xhr.onerror = function() {
      console.error(xhr.statusText);
    };
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(
            JSON.parse(xhr.responseText)
          );
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };

    xhr.open('GET', uri + [latitude, longitude].join(','));
    xhr.send();
  }, false);

}());
