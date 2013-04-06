var Map = {
    _init: function() {
        this.map = new L.Map('map_leaflet');
        this.overlays = [];

        var hull = new L.LatLng(13, 80);
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © openstreetmap contributors';
        var osm = new L.TileLayer(osmUrl,{minZoom:8,maxZoom:18,attribution:osmAttrib});
        this.map.setView(hull,11);
        this.map.addLayer(osm);
    },
    Add: function(index, lat, lun, color) {
        color = color ? 'red' : color;
        var circle = L.circle([lat, lun], 500, {
            color: color,
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(this.map);  
        this.overlays[index] = circle;   
    }
}

$(function(){
    Map._init();
    $('.slider').slider().on('slide', function(evt) {
        var index = evt.value;
            if (this.currentIndex != index) {
            var value = data[keys[index]]
            if (value) {
                Map.Add(index, value[0], value[1]);
            }
        }
        this.currentIndex = index;
    });
});