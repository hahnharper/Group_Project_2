// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("static/data/B2016_chart.json").then(function(importedData) {
    // console.log(Object.keys(importedData));
    // console.log(Object.values(importedData));
    // console.log(Object.entries(importedData));

    // Variable Declaration
    var data = Object.entries(importedData);
    console.log(data);

    
})

//       // Trace1 for the Greek Data
//   var trace1 = {
//     x: data.map(row => row.Colonies),
//     // y: data.map(row => row.greekName),
//     // text: data.map(row => row.greekName),
//     name: "Colonies",
//     type: "line",
//     orientation: "h"
//   };

//   // data
//   var chartData = [trace1];

//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Greek gods search results",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };

//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("chart1", chartData, layout);
// });

