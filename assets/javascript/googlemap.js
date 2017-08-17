function initMap() {
    var uluru = {lat: 39.114171, lng: -94.627457};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

