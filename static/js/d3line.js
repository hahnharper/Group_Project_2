BeeData = "/static/data/B_map.csv"

var dataArray = [
    { x: 10, y: 12 },
    { x: 20, y: 25 },
    { x: 30, y: 16 },
    { x: 40, y: 20 }
];

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

d3.csv(BeeData).then(function(data, err) {
    if (err) throw err;
    //select and append svg to chart2
    console.log(data)

    //parse data 
    data.forEach(function(data) {
        // console.log(data)
        data.Colonies = +data.Colonies;
        data['Max Colonies'] = +data['Max Colonies'];
        data['Lost Colonies'] = +data['Lost Colonies'];
        data['Added Colonies'] = +data['Added Colonies'];
        data['Renovated Colonies'] = +data['Renovated Colonies'];
    })

    var xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d['Lost Colonies'])])
        .range([0, svgWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Colonies)])
        .range([svgHeight, 0]);

    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    var lineGenerator = d3.line()
        .x(d => xScale(d['Lost Colonies']))
        .y(d => yScale(d.Colonies));

    console.log("Drawing commands:", lineGenerator(data));

    svg.append("g")
        .classed("axis", true)
        .call(leftAxis);

    svg.append("g")
        .classed("axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator(data));
});