// requireds
const fs = require('fs');

const colors = require('colors');


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número!!`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido "${limite}" no es un número!!`);
            return;
        }


        console.log('==========================='.green);
        console.log(`==tabla de ${base}==`.green);
        console.log('==========================='.bgGreen);
        let data = '';

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número!!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log('2 * ' + i + ' = ', 2 * i);

            /// otra forma
            //console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //fs.writeFile('tabla-2.txt', 'Hola mundo', (err) => {
        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${ limite }.txt`)
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}