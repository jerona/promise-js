// promise con then and catch concatenate.

function getDataPeopleRepository(dni) {
    let datasPeople = [
        { id: 0, dni: '000000A', name: 'people1' },
        { id: 1, dni: '000001B', name: 'people2' },
        { id: 2, dni: '000002C', name: 'people3' }
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

    getPeople('000000A')
        .then((people1) => {
            console.log('1º: ', new Date().toUTCString());
            console.log(people1.dni + ' ', people1);
            return getPeople('000001B');
        })
        .then((people2) => {
            console.log('2º: ', new Date().toUTCString());
            console.log(people2.dni + ' ', people2);
            return getPeople('000002C');
        })
        .then((people3) => {
            console.log('3º: ', new Date().toUTCString());
            console.log(people3.dni + ' ', people3);
        })
        .catch((error) => { new Error('error en promesa') });

    console.log('cargando las promesas espere...');
}

getPeoplePainted();