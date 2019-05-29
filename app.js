colors = require('colors/safe');
const  argv = require('./config/yargs').argv;
const { crearArchivo, leerArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e))


        leerArchivo(argv.b, argv.l);

        console.log("Listar");
        break;
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)) )
            .catch(e => console.log(e))

        break;
    default:
        break;
}


//console.log(argv);