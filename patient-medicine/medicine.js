d3.json("medicine.json", function(error, data) {
    if(error) {
        console.error('Error loading patient history data');
        console.error(error);
        return;
    }

    console.log(data[0]);

    var patientHistory = d3.select('medicine');

    console.log(patientHistory);

    patientHistory.selectAll('.medicine')
        .data(data)
        .enter()
        .append('p')
        .attr('class', 'patient')
        .text(function(patient) {
            return patient['date'] + '. ' + patient['possible diagnosis'] + ' with ' + patient['blood_pressure'];
        });

    var patientTableBody = d3.select('#medicine-table tbody');

    var trPatient = patientTableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    trPatient.append('td')
        .style('text-aling', 'center')
        .text(function(patient) {
            return patient['name'];
        });

    trPatient.append('td')
        .style('text-aling', 'center')
        .text(function(patient) {
            return patient['date'];
        });

    trPatient.append('td')
        .text(function(patient) {
            return patient['medicine'];
        });

    trPatient.append('td')
        .style('text-align', 'Left')
        .text(function(patient) {
            return patient['duration'];
        });

    trPatient.append('td')
        .style('text-align', 'left')
        .text(function(patient) {
            return patient['expiration'];
        });

    trPatient.append('td')
        .style('text-align', 'Left')
        .text(function(patient) {
            return patient['class'];
        });


});