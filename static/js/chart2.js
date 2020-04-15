var CO2 = "/static/data/CO2.csv"
var GDP = "/static/data/GDP2.csv"
country = "/static/data/Country_2014.csv"


function loadDropdown() {
    var options = ['GDP', 'Life Expectancy', 'Poverty', 'Mortality', 'Population']
    var dropSelect = d3.select("#selXaxis")
    options.forEach(element => {
        dropSelect.append("option")
            .text(element)
    })


}
loadDropdown()

Plotly.d3.csv(country, function(err, rows) {

    rows.forEach(function(data) {
        // console.log(data['2014'])
        data.GDP = +data.GDP;
        data.Pop = +data.Pop;
        data.Pop_gr = +data.Pop_gr;
        data.Life = +data.Life;
        data.CO2 = +data.CO2;
        data.Elec = +data.Elec;
        data.Mort = +data.Mort;
        data.Pov = +data.Pov
    });

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "markers",
        name: 'Mortality vs CO2',
        x: unpack(rows, 'Mort'),
        y: unpack(rows, 'CO2'),
        line: { color: '#17BECF' }
    }

    var trace2 = {
        x: unpack(rows, 'Pov'),
        y: unpack(rows, 'CO2'),
        name: 'Poverty vs CO2',
        mode: "markers",
        marker: {
            size: unpack(rows, 'GDP') * 2,
            color: '#red'
        }
    };

    var data = [trace1, trace2];

    var layout = {
        title: 'Basic Time Series',
    };

    Plotly.newPlot('chart2', data, layout);
})