d3.json("diagnosis.json", function(error, data) {
    if(error) {
        console.error('Error loading patient history data');
        console.error(error);
        return;
    }

    console.log(data[0]);

    var patientHistory = d3.select('patient');

    console.log(patientHistory);

    patientHistory.selectAll('.patient')
        .data(data)
        .enter()
        .append('p')
        .attr('class', 'patient')
        .text(function(patient) {
            return patient['date'] + '. ' + patient['possible diagnosis'] + ' with ' + patient['blood_pressure'];
        });

    var patientTableBody = d3.select('#patient-table tbody');

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
            return patient['possible diagnosis'];
        });

    trPatient.append('td')
        .style('text-align', 'center')
        .text(function(patient) {
            return patient['weight'];
        });

    trPatient.append('td')
        .style('text-align', 'left')
        .text(function(patient) {
            return patient['symptoms'];
        });

    trPatient.append('td')
        .style('text-align', 'center')
        .text(function(patient) {
            return patient['blood_pressure'];
        });

    trPatient.append('td')
        .style('text-align', 'center')
        .text(function(patient) {
            return patient['heart_rate'];
        });

    trPatient.append('td')
        .style('text-align', 'center')
        .text(function(patient) {
            return patient['respitory_rate'];
        });


});