var	margin = {top: 30, right: 40, bottom: 30, left: 50},
	width = 2200 - margin.left - margin.right,
	height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal()
    .rangeRoundBands([0,width], 0.2,0.2);
var	y = d3.scale.linear().range([height, 0]);

 var	xAxis = d3.svg.axis().scale(x)
 	.orient("bottom");

var	yAxis = d3.svg.axis().scale(y)
	.orient("left");

var	valueline = d3.svg.line()
	.x(function(d) { return x(d.year); })
	.y(function(d) { return y(d.BirthRate); });

var	valueline2 = d3.svg.line()
	.x(function(d) { return x(d.year); })
	.y(function(d) { return y(d.Deathrate); });

var	svg = d3.select("#multiline")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.json("../outputdata/OutputJSONNavin2.json", function(error, data) {
	data.forEach(function(d) {
		d.BirthRate = +d.BirthRate;
		d.Deathrate = +d.Deathrate;
	});

  x.domain(data.map(function(d){
      return d.year;
  }));

	y.domain([0, d3.max(data, function(d) { return Math.max(d.BirthRate, d.Deathrate); })]);

	svg.append("path")		// Add the valueline path.
		.attr("class", "line")
    .style("stroke", "red")
		.attr("d", valueline(data));

	svg.append("path")		// Add the valueline2 path.
		.attr("class", "line")
		.style("stroke", "blue")
		.attr("d", valueline2(data));

	svg.append("g")			// Add the X Axis
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	svg.append("g")			// Add the Y Axis
		.attr("class", "y axis")
		.call(yAxis);

	svg.append("text")
		.attr("transform", "translate(" + (width+3) + "," + y(data[0].BirthRate) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "red")
		.text("birth rate");

	svg.append("text")
		.attr("transform", "translate(" + (width+3) + "," + y(data[0].Deathrate) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "green")
		.text("death rate");

});
