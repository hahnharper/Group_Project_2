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
    left: 10
};

//set chart Height and width
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

//select chart2 and append to svg
var svg = d3
    .select("#chart2")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - chartMargin.left)
    .attr("x", 0 - (svgHeight / 2))
    .attr("dy", "1em")
    .attr("yvalue", "Colonies")
    .classed("active", true)
    .text("Colonies Added");

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

    console.log(data)

    function unpack(data, key) {
        return data.map(function(data) { return data[key]; });
    }

    console.log(unpack(data, 'States'))


    // sorting the data
    // data.sort((a, b) => b.value - a.value);
    var barSpacing = 2; // desired space between each bar
    var scaleY = 1; // 10x scale on rect height

    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = (chartWidth - (barSpacing * (data.length - 1))) / data.length;

    var xScale = d3.scaleBand()
        .domain([0, (unpack(data, 'States'))])
        .range([0, data.length]);

    // var yScale = d3.scaleLinear()
    //     .domain([0, d3.max(data, d => d.Colonies)])
    //     .range([svgHeight, 0]);

    // function xScale(stateData, chosenXAxis) {
    //     // create scales
    //     var xLinearScale = d3.scaleLinear()
    //         .domain([d3.min(stateData, d => d[chosenXAxis]) * .9,
    //             d3.max(stateData, d => d[chosenXAxis])
    //         ])
    //         .range([0, width]);

    //     return xLinearScale;

    // }

    function yScale(data, chosenYAxis) {
        // create scales
        var yScaled = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[chosenYAxis]) * .01])
            .range([svgHeight, 0]);

        return yScaled;

    }

    //define and call axis
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale(data, 'Colonies'));

    svg.append("g")
        .classed("axis", true)
        .call(leftAxis);

    svg.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    // @TODO
    // Create code to build the bar chart using theData.
    chartGroup.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", (d => barWidth))
        .attr("height", (d => d.Colonies / 1000))
        .attr("x", ((d, i) => i * barWidth))
        .attr("y", (d => chartHeight - (d.Colonies / 1000)))
})

// .attr("y", function(d) {
//     // When the size of the text is the radius,
//     // adding a third of the radius to the height
//     // pushes it into the middle of the circle.
//     return yLinearScale(d[chosenYAxis]);
// })