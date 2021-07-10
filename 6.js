const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

const sarah2 = {
    name: 'Sarah',
    job: {
        hiringDate: '23.07.2020'
    }
}

/**
 *  Show job name in object
 * @param {Object} param0 
 */
function printJobName( { job: { name: jobName }} ) {
    if (!jobName) console.log('Object does not contain job.name');
    else console.log(jobName);
}

printJobName(sarah); // Andersen
printJobName(sarah2); // Object does not contain job.name
