// utilizando Promise.all()

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
            }, 5000);
        });
    return promise;
}

function getPeoplePainted() {
    console.log('0º: ', new Date().toUTCString());
    let promisePeople1 = getPeople('000000A');
    let promisePeople2 = getPeople('000001B');

    Promise.all([promisePeople1, promisePeople2])
        .then(
            (peoples) => {
                console.log('1º Promesas cargadas: ', new Date().toUTCString());
                console.log('valores promesas: ', peoples);

                console.log(peoples[0].dni + ' ', peoples[0]);
                console.log(peoples[1].dni + ' ', peoples[1]);
            })
        .catch(
            (error) => {
                new Error('Error con algunas de las promesas');
            });

    console.log('cargando las promesas espere...');
}

getPeoplePainted();