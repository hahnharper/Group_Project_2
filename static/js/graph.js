// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument


d3.json("static/data/B2019_chart.json").then(function(importedData) {
    // console.log(Object.keys(importedData));
    // console.log(Object.values(importedData));
    // console.log(Object.entries(importedData));

    var data = Object.keys(importedData)
        // console.log(data)
    var vvalues = []
    colonies = getValue(importedData, "Renovated Colonies", vvalues)
    console.log(colonies, vvalues);

    // Sending in what we want
    function getValue(data, kkeys) {
        var names = []
            // var vvalues = []
        Object.keys(data[kkeys]).forEach(function(element) {
            console.log(element)
            names.push(element)
            vvalues.push(data[kkeys][element])

        });

        return names
    };


    // 2016
    var colony = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    var value = [1250, 40600, 5800, 577000, 5040, 660, 106000, 45900, 8220, 35500, 3020, 4840, 4080, 670, 2060, 18700, 860, 1650, 1060, 13300, 23870, 17840, 3380, 44180, 16410, 5010, 1610, 9460, 5160, 92530, 10320, 2710, 34300, 11500, 4980, 38800, 1880, 151800, 6490, 100, 1460, 42170, 1060, 12310, 6840]

    // 2017
    var colony1 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    var value1 = [840, 7450, 2770, 437000, 1430, 250, 62500, 9550, 2190, 12020, 730, 1450, 3180, 1190, 620, 14540, 700, 460, 620, 12910, 6100, 86800, 1960, 20000, 55000, 210, 1150, 3030, 2030, 201500, 1920, 10630, 22600, 2230, 1210, 24900, 570, 104460, 7220, 90, 920, 14830, 440, 4260, 1580]

    // 2018
    var colony2 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    var value2 = [2270, 7300, 2380, 491000, 17910, 590, 162000, 77200, 1280, 52780, 3410, 1420, 11300, 2290, 1840, 45800, 1800, 2200, 1610, 27030, 11150, 34060, 1550, 49900, 40550, 1040, 4100, 16960, 7090, 143910, 5790, 3170, 69900, 5390, 5860, 30940, 2940, 225400, 13330, 470, 2020, 44500, 6100, 18570, 7320]

    // 2019
    var colony3 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

    var value3 =   [4810, 5760, 3780, 575000, 9900, 870, 166000, 137000, 17100, 53510, 4300, 3160, 5980, 2700, 1670, 6820, 1870, 2160, 1690, 36200, 34990, 13200, 1410, 44500, 6740, 660, 1450, 7770, 3360, 80010, 5230, 6770, 88900, 6070, 8690, 72020, 3140, 122570, 5950, 240, 3150, 24870, 1880, 12930, 6100]

    // Trace1 for the Data
    var trace1 = {
        x: colony,
        y: value,
        // text: data.map(row => row.),
        name: "2016",
        mode: "lines+marker",
        type: "scatter"
            // orientation: "h"
    };

    var trace2 = {
        x: colony1,
        y: value1,
        // text: data.map(row => row.),
        name: "2017",
        mode: "lines+marker",
        type: "scatter"
            // orientation: "h"
    };

    var trace3 = {
        x: colony2,
        y: value2,
        // text: data.map(row => row.),
        name: "2018",
        mode: "lines+marker",
        type: "scatter"
            // orientation: "h"
    };

    var trace4 = {
        x: colony3,
        y: value3,
        // text: data.map(row => row.),
        name: "2019",
        mode: "lines+marker",
        type: "scatter"
            // orientation: "h"
    };



    // data
    var chartData = [trace1, trace2, trace3, trace4];

    // Apply the group bar mode to the layout
    var layout = {
        xaxis: {
            rangeselector: "States",
            rangeslider: {}
        },
        title: "Renovated Colonies",
        yaxis: { range: ["Total Renovated"] }
        // }
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("chart1", chartData, layout)

})