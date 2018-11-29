//////////////////////////////////////////////////////////////////////
////////////////////// patient weight by lbs /////////////////////////
//////////////////////////////////////////////////////////////////////
d3.csv('./weight.csv', function(error, dataset) {
    console.log('data import complete');
    console.log(dataset);

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
                    return (h - hPadding)  - yScaleRegion(+d.weight);// - yScaleRegion(d);
                })
                .attr('width', (w/2)/rList.length - barPadding)
                .attr('height', function(d, i) {
                    return yScaleRegion(+d.weight);//yScaleRegion(d);
                })
                .style('fill', '#4c7ae2');
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
        .style('font-family', 'sans-serif')
        .text('Date');

svg.append('text')
        .attr('class', 'axisLabel')
        .attr('transform', 'translate(25, 250)rotate(-90)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('Weight (lbs)');

svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(175, 30)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('Patient weight by lbs');


//////////////////////////////////////////////////////////////////////
///////////////////// patient blood pressure /////////////////////////
//////////////////////////////////////////////////////////////////////
d3.csv('./weight.csv', function(error, dataset) {
    console.log('data import complete');
    console.log(dataset);

    var w = d3.select('svg').attr('width');
    var h = d3.select('svg').attr('height');


    var barPadding = 10;
    var wPadding = 20;
    var hPadding = 250;

    var xScale = d3.scaleLinear().domain([40, 100]).range([0,300])
    var yScale = d3.scaleLinear().domain([0,150]).range([300,0]);
    var rSacale = d3.scaleSqrt().domain([0, 30]).range([0,30]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    var svg = d3.select('svg');

    svg.append('g')
        .attr('class', 'x axis blood pressure')
        .attr('transform', 'translate(650, 350)')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis blood pressure')
        .attr('transform', 'translate(650, 50)')
        .call(yAxis);

    svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(600, 250)rotate(-90)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('Systolic');

    svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(780, 390)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('diastolic');


    svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(780, 30)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('Blood Pressure');


    var circle = svg.selectAll('blood-pressure')
        .data(dataset)
        .enter()
        .append('g')
        .append('circle')
        .attr('cx', function(d){
            return 400 + xScale(+d['systolic']);

        })
        .attr('cy', function(d) {

            return yScale(+d['diastolic'])
        })
        .style('fill', function(d) {
            if(+d['systolic'] < 90) {
                return '#C00F0D';
            } else {
                return '8C0200';
            }
        })
        .style('opacity', 0.7)
        .text('font-family', 'sans-sarif')
        .attr('r', 15);


});

//////////////////////////////////////////////////////////////////////
/////////////////// patient body temperature /////////////////////////
//////////////////////////////////////////////////////////////////////
d3.csv('./weight.csv', function(error, dataset) {
    console.log('data import complete');
    console.log(dataset);

    var svgWidth = 900;
    var svgHeight = 1080;

    // Define a padding object
    // This will space out the trellis subplots
    var padding = {t: 20, r: 20, b: 60, l: 60};

    // Compute the dimensions of the trellis plots, assuming a 2x2 layout matrix.
    trellisWidth = svgWidth / 2 - padding.l - padding.r;
    trellisHeight = svgHeight / 2 - padding.t - padding.b;


    var w = d3.select('svg').attr('width');
    var h = d3.select('svg').attr('height');


    var barPadding = 10;
    var wPadding = 20;
    var hPadding = 250;


    var rScale = d3.scaleLinear()
        .domain([1, 12])
        .range([90, 400]);

    var ticks = [1,2,3,4,5,6,7,8,9,10,11,12];
    var tickLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    var rAxis = d3.axisBottom(rScale)
        .tickValues(ticks)
        .tickFormat(function(d,i){ return tickLabels[i] });

    var yScale = d3.scaleLinear().domain([80,105]).range([300,0]);

    var yAxis = d3.axisLeft(yScale);

    var svg = d3.select('svg');

    svg.append("g")
        .attr("class", "raxis")
        .call(rAxis)
        .attr("transform","translate(-20, 800)");

    svg.append('g')
        .attr('class', 'y respiratory')
        .attr('transform', 'translate(70, 500)')
        .call(yAxis);

    svg.append('text')
            .attr('class', 'axisLabel')
            .attr('transform', 'translate(205, 850)')
            .style('font-weight', 'bold')
            .style('font-family', 'sans-serif')
            .text('Month');

    svg.append('text')
            .attr('class', 'axisLabel')
            .attr('transform', 'translate(25, 800)rotate(-90)')
            .style('font-weight', 'bold')
            .style('font-family', 'sans-serif')
            .text('Mean Respiratory Rate');

    svg.append('text')
        .attr('class', 'chartLabel')
        .attr('transform', 'translate(130, 480)')
        .style('font-weight', 'bold')
        .style('font-family', 'sans-serif')
        .text('Mean Respiratory Rate by Month');


    var lineInterpolate = d3.line()
        .x(function(d) { return 80 + i * ((600/2) - 20) / 12; })
        .y(function(d) { return yScale(d['temperature']); });

    var circle = svg.selectAll('.line-plot')
        .data(dataset)
        .enter()
        .append('g')
        .append('circle')
        .attr('cx', function(d, i) {
            return   80 + i * ((600/2) - 20) / 12;
        })
        .attr('cy', function(d) {
            return 500 + yScale(+d['temperature'])
        })
        .style('fill', '#ffab00')
        .style('opacity', 0.7)
        .attr('d', lineInterpolate)
        .text('font-family', 'sans-sarif')
        .attr('r', 3);

    var trellisG = svg.selectAll('.trellis')
        .data(dataset)
        .enter()
        .append('g')
        .attr('class', 'trellis')
        .attr('transform', function(d,i) {
            // Use indices to space out the trellis groups in 2x2 matrix
            var tx = (i % 2) * (trellisWidth + padding.l + padding.r) + padding.l;
            var ty = Math.floor(i / 2) * (trellisHeight + padding.t + padding.b) + padding.t;
            return 'translate(500,500)';
        });

    trellisG.selectAll('.line-plot')
        .data(function(d){
            // d3 data() function also takes a data callback function
            // d in this scope refers to the {key:"COMPANY", values:[]} object that is bound to trellisG
            return [d]; // return an array with one element b/c we only want to append one <path> element
        })
        .enter()
        .append('path')
        .attr('class', 'line-plot') // add classname
        .attr('d', lineInterpolate); // Use d3 path-generator to define the d-attribute, this defines the points and line segments of the path


});
