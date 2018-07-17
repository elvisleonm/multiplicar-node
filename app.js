const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');



//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`tabla: ${ archivo }`))
            .catch(e => console.log(e));
        //console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo creado: ${ archivo }`))
            //.then(archivo => console.log('Archivo creado:'.green, `${ archivo }`.blue))
            .then(archivo => console.log('Archivo creado:'.gray, colors.green(archivo)))
            .catch(e => console.log(e));
        //console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}


// console.log(process.argv);
//let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv2);

//console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// // console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));