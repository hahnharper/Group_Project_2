var data = d3.csvParse(await FileAttachment("./static/data/hcny_2019.csv").text(), d3.autoType)

console.log(data)