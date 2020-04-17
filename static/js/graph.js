// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument


d3.json("static/data/B2019_chart.json").then(function(importedData) {
    // console.log(Object.keys(importedData));
    // console.log(Object.values(importedData));
    // console.log(Object.entries(importedData));

    var data = Object.keys(importedData)
        // console.log(data)
    var vvalues = []
    colonies = getValue(importedData, "Colonies", vvalues)
    console.log(colonies, vvalues);

    // Sending in what we want
    function getValue(data, kkeys) {
        var names = []
            // var vvalues = []
        Object.keys(data[kkeys]).forEach(function(element) {
            names.push(element)
            vvalues.push(data[kkeys][element])

        })

        return names

        // return vvalues

    }
    // // // Call updatePlotly() when a change takes place to the DOM
    // d3.selectAll("#selDataset").on("change", updatePlotly);

    // // // This function is called when a dropdown menu item is selected
    // function updatePlotly() {
    // //   // Use D3 to select the dropdown menu
    //   var dropdownMenu = d3.select("#selDataset");
    // //   // Assign the value of the dropdown menu option to a variable
    //   var dataset = dropdownMenu.property("value");


    // 2016
    var colony = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    var value = [31000, 144000, 72500, 3960000, 68500, 13800, 899000, 436000, 51500, 344000, 43500, 43500, 89000, 28100, 33500, 200000, 18400, 30000, 19000, 230500, 336000, 177000, 51000, 300500, 178000, 41000, 26000, 140000, 89500, 868000, 77500, 59000, 327000, 76500, 56500, 639000, 35500, 697000, 89000, 24000, 31000, 328000, 23400, 149500, 70500]

    // 2017
    var colony1 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    var value1 = [30500, 111000, 111000, 3750000, 77500, 11400, 970000, 406000, 55500, 351000, 37500, 27800, 127500, 22700, 27000, 205000, 14800, 30000, 24700, 274000, 308000, 142500, 44500, 349500, 112500, 40200, 26000, 166000, 91500, 1094000, 71000, 32300, 350000, 63500, 54000, 422000, 36000, 845000, 83500, 23500, 27500, 290000, 28500, 168500, 66200]

    // 2018
    var colony2 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    var value2 = [28000, 106000, 89000, 3420000, 95000, 13600, 861000, 499000, 55000, 358000, 49000, 39000, 107000, 21100, 30000, 222000, 15900, 33500, 20800, 275000, 293000, 158000, 32000, 334500, 103000, 43000, 29000, 167000, 89000, 1045000, 70500, 51100, 330000, 75000, 64000, 314000, 35500, 851000, 101000, 26500, 37500, 291000, 30500, 160000, 84500]

    // 2019
    var colony3 = ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    var value3 = [29500, 101000, 95500, 3550000, 93500, 13200, 932000, 547000, 66000, 404000, 43500, 35500, 163000, 19100, 24500, 201000, 28600, 29500, 20100, 218500, 313000, 100000, 35000, 328000, 114000, 40400, 23400, 154000, 68500, 1025000, 54500, 36800, 327000, 71000, 47000, 341000, 35000, 738000, 79000, 24500, 26500, 250000, 26200, 156000, 77000]

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
        title: "Total Colonies",
        xaxis: { title: "States" },
        yaxis: { title: "Bee Count" }
        // }
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("chart1", chartData, layout);

});