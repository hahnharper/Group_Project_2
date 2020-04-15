// create a dashboard containing atleast 4 seperate plots
// use d3 to pull  
//

BeeData = "/static/data/B_map.json"
c = "/static/data/state_border.geojson"

// create a dashboard containing atleast 4 seperate plots
// use d3 to pull  
//

// Creating map object
var myMap = L.map("map", {
    center: [40, -90],
    zoom: 3
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 10,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

//access json data file 
fetch(BeeData).then(function(resp) {
    return resp.json();
}).then(function(data) {
    function clickBox(feature) {
        var state = feature.properties.NAME
        var colonies = data['Colonies'][state];
        var lost = data['Lost Colonies'][state];
        var added = data['Added Colonies'][state];
        var reno = data['Renovated Colonies'][state];
        var clickData = [colonies, lost, added, reno]
        return (clickData);
    }
    //function that creates style, it also calls 
    //getColor() for finding color shade
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.NAME),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    //access geojson and add layer
    d3.json(c, function(data) {
        var boundaries = L.geoJSON(data, {
            style: style,
            onEachFeature: function(feature, layer) {

                clickData = clickBox(feature);
                console.log(clickData[0])
                layer.bindPopup(`State: ${feature.properties.NAME} <br> Colonies: ${clickData[0]} <br> Lost Colonies: ${clickData[1]} <br> Added Colonies: ${clickData[2]} <br> Renovated Colonies: ${clickData[3]}`)
            }
        }).addTo(myMap);
    })

    //return color to style based on CO2 emissions
    function getColor(value) {
        try {
            val = data['Colonies'][value];

            valC = val > 1000000 ? '#806600' :
                val > 600000 ? '#b38f00' :
                val > 300000 ? '#e6b800' :
                val > 150000 ? '#ffd11a' :
                val > 75000 ? '#ffdb4d' :
                val > 5000 ? '#ffe680' :
                '#fff0b3';

            return valC;
            // if country doesn't exist in JSON return blue
        } catch (e) {
            return "#3357EB"
        }
    }
});