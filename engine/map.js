 function initialize2() {
                            var mapCanvas2 = document.getElementById('map-canvas');

                            var mapOptions = {
                                center: new google.maps.LatLng('33.95418', '35.60226'),
                                zoom: 12,
                                scrollwheel: true,
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            }
                            var map = new google.maps.Map(mapCanvas2, mapOptions);

                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng('33.95418', '35.60226'),
                                map: map,
                                icon: "imgs/pin.png"

                            });

                        }
google.maps.event.addDomListener(window, 'load', initialize2);