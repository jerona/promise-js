/*
promise con then and catch
se simula varias promesas en la 
que en una de ellas no se encuentra una persona
con el dni 000003D
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
                else reject('No existen persona con ese dni');
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
            return getPeople('000003D'); // no existe people, por lo que va directo al catch.
        })
        .then((people3) => {
            // no entrará aquí por que people 2 falla.
            console.log('3º: ', new Date().toUTCString());
            console.log(people3.dni + ' ', people3);
        })
        .then((people4) => {
            // no entrará aquí por que people 2 falla.
            console.log('4º: ', new Date().toUTCString());
            console.log(people4.dni + ' ', people4);
            return getPeople('000001B');
        })
        .catch((error) => { console.error('error visualizado: ', error) });

    console.log('cargando las promesas espere...');
}

getPeoplePainted();