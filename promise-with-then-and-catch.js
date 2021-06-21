// promise con then and catch.

function getDataPeopleRepository(dni) {
    let datasPeople = [
        { id: 0, dni: '000000A', name: 'people1' },
        { id: 1, dni: '000001B', name: 'people2' }
    ];
    return datasPeople.filter((people) => people.dni === dni)[0];
}

function getPeople(dni) {
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(getDataPeopleRepository(dni));
                // reject(new Error('No existen datos'));
            }, 5000);
        });
    return promise;
}

function getPeoplePainted() {
    console.log('0º: ', new Date().toUTCString());
    let promisePeople1 = getPeople('000000A');
    let promisePeople2 = getPeople('000001B');

    promisePeople1.then((people) => {
        console.log(people.dni + ' ', people);
        console.log('1º: ', new Date().toUTCString());
    });

    promisePeople2.then((people) => {
        console.log(people.dni + ' ', people);
        console.log('2º: ', new Date().toUTCString());
    });
    console.log('cargando las promesas espere...');
}

getPeoplePainted();