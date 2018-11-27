!(function (d3) {

//$("acontent").empty();

d3.csv('./patient-profile/weight.csv', function(error, dataset) {
    console.log('data import complete');
    console.log(dataset);

    //var w = d3.select('svg').attr('width');
    //var h = d3.select('svg').attr('height');


    var w = 680;
    var h = 600;

    var barPadding = 10;
    var wPadding = 20;
    var hPadding = 250;

    // get max value for each region and category
    var r = dataset;
    
    var test = d3.nest()
            .key(function(d) { return +d.weight})
            .entries(dataset);

    console.log(r);

    var rList = [r['Jan'], r['Feb'], r['Mar'], r['Apr'], r['May'], r['Jun'], r['Jul'], r['Aug'], r['Sep'], r['Oct'], r['Nov'], r['Dec']];
    
    var yScaleRegion = d3.scaleLinear()
                .domain([150, 0])
                .range([200, 0]);

    var svg = d3.select("svg");

    svg.selectAll('rect.region')
                .data(r)
                .enter()
                .append('rect')
                .attr('class', function(d, i) {
                    return 'rect' + i ;
                })
                .attr('x', function(d, i) {
                    return   80 + i * ((w/2) - wPadding) / rList.length;
                })
                .attr('y', function(d) {
                    return (h - hPadding)  - yScaleRegion(d.weight);// - yScaleRegion(d);
                })
                .attr('width', (w/2)/rList.length - barPadding)
                .attr('height', function(d, i) {
                    return yScaleRegion(+d.weight);//yScaleRegion(d);
                });
});

var svg = d3.select('svg');

var salesScale = d3.scaleLinear()
        .domain([0, 200])
        .range([300, 0]);

var rScale = d3.scaleLinear()
        .domain([1, 12])
        .range([90, 400]);

var ticks = [1,2,3,4,5,6,7,8,9,10,11,12];
var tickLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var rAxis = d3.axisBottom(rScale)
        .tickValues(ticks)
        .tickFormat(function(d,i){ return tickLabels[i] });

var salesAxis = d3.axisLeft(salesScale)
        .tickFormat(function (d) {
             return d;
         });

svg.append("g")
        .attr("class", "raxis")
        .call(rAxis)
        .attr("transform","translate(-10, 350)");

svg.append('g').attr('class', 'salesAxis')
        .attr('transform', 'translate(70, 50)')
        .call(salesAxis);

svg.append('text')
        .attr('class', 'axisLabel')
        .attr('transform', 'translate(205, 390)')
        .style('font-weight', 'bold')
        .text('Date');

svg.append('text')
        .attr('class', 'axisLabel')
        .attr('transform', 'translate(25, 250)rotate(-90)')
        .style('font-weight', 'bold')
        .text('Weight (lbs)');

svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(175, 30)')
        .style('font-weight', 'bold')
        .text('Patient weight by lbs');



})(d3);