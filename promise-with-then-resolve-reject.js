/* 
ejemplo promise con then controlando
errores con then en este caso
no importa que la peticiones den fallos
de los clientes en cuestión ya que se 
pretende seguir la ejecucion de los que se haga 
correctamente pasando de los que den errores.
*/

function getDataPeopleRepository(dni) {
    let datasPeople = [
        { id: 0, dni: '000000A', name: 'people1' },
        { id: 1, dni: '000001B', name: 'people2' },
        { id: 2, dni: '000002C', name: 'people3' }
    ];

    const peoplesFound = datasPeople.filter((people) => people.dni === dni);
    return peoplesFound && peoplesFound.length > 0 ? peoplesFound[0] : null;
}

function getPeople(dni) {
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                const peopleFound = getDataPeopleRepository(dni);

                if (peopleFound) resolve(peopleFound);
                else reject('No existen persona con el dni: ' + dni);
            }, 5000);
        });
    return promise;
}

function getPeoplePainted() {
    console.log('0º: ', new Date().toUTCString());

    getPeople('000000B') // DNI invalido
        .then((people1) => {
            console.log('1º: ', new Date().toUTCString());
            return people1.dni + ' ', people1;
        }, ((reject) => '1º error: ' + reject))
        .then(respuesta => {
            console.log('2º: ', new Date().toUTCString());
            console.log('!la respuesta: ', respuesta);
            return getPeople('000001B') // DNI Valido
        }).then((people2) => {
            console.log('3º: ', new Date().toUTCString());
            return people2.dni + ' ', people2
        }, ((reject) => '3º error:' + reject))
        .then(respuesta => {
            console.log('4º: ', new Date().toUTCString());
            console.log('!!la respuesta: ', respuesta);
        });
}

getPeoplePainted();