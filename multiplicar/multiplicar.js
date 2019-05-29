var colors = require('colors');
const fs = require('fs');

let i = 1, j = 1;

let leerArchivo = (base, limite) => {
    while (i <= base) {
        while ( j <= limite) {
            console.log(`Tabla: ${base} x ${j} = ${ base * j}` .rainbow);
            j++;
        }
        i++;
    }

}

let crearArchivo = ( base, limite ) => {
    return new Promise ((resolve, reject) => {

        if (!Number(base)){
            reject(`La base del número pasado: (${ base }) no es un número`);
            return;
        }


        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += (`${ base } * ${ index } =  ${ base * index } \n` );
        }
        
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
          if (err) 
            reject(err);
          else
            resolve(`tabla ${ base } `);
        });
    })
}


module.exports = {
    crearArchivo, leerArchivo
}
