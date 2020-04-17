//create leaflet map containing choropleth style layers for Bee data

BeeData = "/static/data/B_map.json"
c = "/static/data/state_border.geojson"


//create base tile layers
var satMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 8,
    id: "mapbox.satellite",
    accessToken: API_KEY
});

var darkMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var lightMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

//store base tile layers in dict
var baseMaps = {
    "Satellite": satMap,
    "Light Map": lightMap,
    "Dark Map": darkMap
};

map = L.map('map', {
    center: [40, -90],
    zoom: 3,
    layers: [satMap, lightMap, darkMap]
});







//access json data file 
fetch(BeeData).then(function(resp) {
    return resp.json();
}).then(function(data) {

    function clickBox(feature, type) {
        var state = feature.properties.NAME
        console.log(data['Colonies'][state])
        var colonies = formatNumber(data['Colonies'][state]);
        var lost = formatNumber(data['Lost Colonies'][state]);
        var added = formatNumber(data['Added Colonies'][state]);
        var reno = formatNumber(data['Renovated Colonies'][state]);
        var div = data['Lost Colonies'][state] / data['Colonies'][state];
        var percLost = formatNumber(div);
        var clickData = [colonies, lost, added, reno, percLost];

        return (clickData);
    };

    //function that creates style, it also calls 
    //getColor() for finding color shade
    function style(feature) {
        var type = 'lost'
        return {
            fillColor: getColor(feature.properties.NAME, type),
            weight: 2,
            opacity: .5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    }

    function style2(feature) {
        var type = 'added'
        return {
            fillColor: getColor(feature.properties.NAME, type),
            weight: 2,
            opacity: .5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    }

    function style3(feature) {
        var type = 'reno'
        return {
            fillColor: getColor(feature.properties.NAME, type),
            weight: 2,
            opacity: .5,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    }


    //function for formatting the numbers with commas
    function formatNumber(num) {
        //if not a number return empty string
        if (num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        } else {
            return '';
        }
    }


    //access geojson and add layer
    d3.json(c).then(function(data) {
        console.log(data)
        var lostColonies = L.geoJSON(data, {
            style: style,
            onEachFeature: function(feature, layer) {
                clickData = clickBox(feature);
                // console.log(clickData[0])
                layer.bindPopup(`State: ${feature.properties.NAME} <br> Colonies: ${clickData[0]} <br> Lost Colonies: ${clickData[1]} <br> Added Colonies: ${clickData[2]} <br> Renovated Colonies: ${clickData[3]} `)
            }
        })

        var addedColonies = L.geoJSON(data, {
            style: style2,
            onEachFeature: function(feature, layer) {
                clickData = clickBox(feature);
                // console.log(clickData[0])
                layer.bindPopup(`State: ${feature.properties.NAME} <br> Colonies: ${clickData[0]} <br> Lost Colonies: ${clickData[1]} <br> Added Colonies: ${clickData[2]} <br> Renovated Colonies: ${clickData[3]} `)
            }
        })
        var renoColonies = L.geoJSON(data, {
            style: style3,
            onEachFeature: function(feature, layer) {
                clickData = clickBox(feature);
                // console.log(clickData[0])
                layer.bindPopup(`State: ${feature.properties.NAME} <br> Colonies: ${clickData[0]} <br> Lost Colonies: ${clickData[1]} <br> Added Colonies: ${clickData[2]} <br> Renovated Colonies: ${clickData[3]} `)
            }
        })
        overlayMaps = {
                "Lost Colonies": lostColonies,
                "Added Colonies": addedColonies,
                "Renovated Colonies": renoColonies
            }
            //add layers to control center
        L.control.layers(baseMaps, overlayMaps).addTo(map);
    })

    //return color to style based on CO2 emissions
    function getColor(value, type) {
        try {
            console.log(type)
            if (type === 'lost') {
                val = data['Lost Colonies'][value];
            } else if (type === 'added') {
                val = data['Added Colonies'][value];
            } else if (type === 'reno') {
                val = data['Renovated Colonies'][value];
            }

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