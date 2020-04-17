BeeData = "/static/data/B_map.csv"


d3.csv(BeeData).then(function(data, err) {
    if (err) throw err;


    data.forEach(function(data) {
        // console.log(data)
        data.Colonies = +data.Colonies;
        data['Max Colonies'] = +data['Max Colonies'];
        data['Lost Colonies'] = +data['Lost Colonies'];
        data['Added Colonies'] = +data['Added Colonies'];
        data['Renovated Colonies'] = +data['Renovated Colonies'];
    })


    console.log(data)

    function unpack(data, key) {
        if (data[key] === typeof(int)) {
            return data.map(function(data) { return data[key] / 1000; });
        }
        return data.map(function(data) { return data[key]; });
    }


    var trace1 = {
        x: unpack(data, 'States'),
        y: unpack(data, 'Colonies'),
        name: "Colonies",
        type: "bar",
    };

    var trace2 = {
        x: unpack(data, 'States'),
        y: unpack(data, 'Added Colonies'),
        name: "Added Colonies",
        type: "bar",
    };

    var trace3 = {
        x: unpack(data, 'States'),
        y: unpack(data, 'Lost Colonies'),
        name: "Lost Colonies",
        type: "bar",
    };

    var data1 = [trace1, trace2, trace3];

    var layout = {
        title: "Total Colonies by State",
        xaxis: {
            tickfont: {
                size: 6,
                color: 'rgb(107, 107, 107)'
            }
        },
        yaxis: {
            tickfont: {
                size: 10,
                color: 'rgb(107, 107, 107)'
            }
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
    };

    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("chart2", data1, layout);
})