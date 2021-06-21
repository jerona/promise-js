/* 
ejemplo async/await promise
con este método se imprimirá por pantalla
de manera sincrona las personas elegidas
*/

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

async function getPeoplePainted() {
    console.log('0º: ', new Date().toUTCString());
    let people1 = await getPeople('000000A');
    let people2 = await getPeople('000001B');

    console.log(people1.dni + ' ', people1);
    console.log(people2.dni + ' ', people2);
    console.log('1º: ', new Date().toUTCString());
}

getPeoplePainted();