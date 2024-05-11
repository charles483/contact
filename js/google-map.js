var map;

        function initMap() {
            var myLatlng = L.latLng(-0.4190, 36.9446);

            var mapOptions = {
                center: myLatlng,
                zoom: 16
            };

            map = L.map('map', mapOptions);

            // Add satellite imagery tile layer
            var satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
            var satelliteAttrib = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
            var satellite = L.tileLayer(satelliteUrl, {
                attribution: satelliteAttrib
            }).addTo(map);

            // Add marker for the address
            var marker = L.marker([ -0.380541,  36.978718]).addTo(map);
            marker.bindPopup("<b>Unnamed Road, Nyeri, 10100, Kenya</b>").openPopup();
        }

        window.onload = initMap;