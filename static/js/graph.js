// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("static/data/B2016_chart.json").then(function(importedData) {
    // console.log(Object.keys(importedData));
    // console.log(Object.values(importedData));
    // console.log(Object.entries(importedData));

    // Variable Declaration
    // var data = Object.entries(importedData);
    // // console.log(Object.entries(data))
    // console.log(data);
    // // console.log(importedData)

    // console.log(Object.entries(importedData))
    // for (let val in Object.entries(importedData)) {
    //     console.log(val)
    //         // importedData.Colonies[val] = +importedData.Colonies[val];
    //         // console.log(val, )
    // }
    // console.log(importedData[0])
    // data.forEach((dataRow) => {
    //     // Append a row to the table body
    //     var row = tbody.append("tr");
    //     // Loop through each field in the dataRow and add
    //     // each value as a table cell (td)
    //     Object.values(dataRow).forEach((val) => {
    //       var cell = row.append("td");
    //       cell.text(val);
    //     });
    //   });

    for (let object in importedData) {
        console.log(object, Object.values(importedData[object]));

    }

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