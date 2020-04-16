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

    console.log(typeof(data.Colonies))

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
        yaxis: { title: "Colonies" },
        barmode: 'group'
    };

    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("chart2", data1, layout);
})