BeeData = "/static/data/B_map.csv"

// var myInit = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     mode: 'cors',
//     cache: 'default'
// };

// let myRequest = new Request(BeeData, myInit);

// Define SVG area dimensions
var svgWidth = 400;
var svgHeight = 300;

// Define the chart's margins as an object
var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
};


var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;


var svg = d3
    .select("#chart2")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// will be called initially and on every data change

d3.csv(BeeData).then(function(data, err) {
    if (err) throw err;

    // var a = data.map(data => data.Colonies)

    //function to determine if object or null
    // const isObject = function(val) {
    //     if (val === null) {
    //         return false;
    //     }
    //     return (typeof val === 'object')
    // };
    // //parse all data
    // for (let val in data) {
    //     if (isObject(data[val])) {
    //         for (let val2 in data[val]) {
    //             data[val][val2] = +data[val][val2];
    //         }
    //     }

    // };
    console.log(data)
    data.forEach(function(data) {
            // console.log(data)
            data.Colonies = +data.Colonies;
            data['Max Colonies'] = +data['Max Colonies'];
            data['Lost Colonies'] = +data['Lost Colonies'];
            data['Added Colonies'] = +data['Added Colonies'];
            data['Renovated Colonies'] = +data['Renovated Colonies'];
        })
        // for (i = 0; i < 49; i++) {
        //     Object.entries(data[i]).forEach(([key, val]) => {

    //         // console.log(`${key}: ${val}`);
    //     })
    // }

    console.log(data.length)

    function unpack(data, key) {
        return data.map(function(data) { return data[key]; });
    }

    console.log(unpack(data, 'Colonies'))


    // sorting the data
    // data.sort((a, b) => b.value - a.value);
    var barSpacing = 1; // desired space between each bar
    var scaleY = 1; // 10x scale on rect height

    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = (chartWidth - (barSpacing * (data.length - 1))) / data.length;

    // @TODO
    // Create code to build the bar chart using theData.
    chartGroup.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", d => barWidth)
        .attr("height", d => d.Colonies * scaleY)
        .attr("x", (d, i) => i * (barWidth + barSpacing))
        .attr("y", d => chartHeight - d.Colonies * scaleY);
})