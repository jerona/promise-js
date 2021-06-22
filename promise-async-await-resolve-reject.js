/* 
ejemplo async/await promise
con este método se imprimirá por pantalla
de manera sincrona las personas elegidas
con try y catch simulando un error por un
people con dni no encontrado.
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

                if (peopleFound) resolve(getDataPeopleRepository(dni));
                else reject(new Error('No existen persona con el dni: ', dni));
            }, 5000);
        });
    return promise;
}

async function getPeoplePainted() {
    console.log('0º: ', new Date().toUTCString());

    try {
        let people1 = await getPeople('000000A');
        console.log(people1.dni + ' ', people1);

        let people2 = await getPeople('000001B');
        console.log(people2.dni + ' ', people2);

        let people3 = await getPeople('000002X'); // DNI invalido
        console.log(people3.dni + ' ', people3);

    } catch (error) {
        console.error('visualizar error: ', error);
    } finally {
        console.log('1º: ', new Date().toUTCString());
    }
}

getPeoplePainted();