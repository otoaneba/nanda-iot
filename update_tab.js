var main = d3.select('#main');

// Select all the house tabs
d3.selectAll('.got-tab')
    .on('click', function(){
        // On click, activate the selected tab (this), and de-select the previously active
        var clickedTab = d3.select(this);

        d3.select('.got-tab.active').classed('active',false);
        clickedTab.classed('active',true);

        // Get which house was selected, call updateBars
        var house = clickedTab.attr('data-house');

    });

// Show bars for "top" house on page load
d3.select(window).on('load', function(){
});

