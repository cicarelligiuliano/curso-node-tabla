const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5, limite = 10, listar = false) => {
  return new Promise((resolve, reject) => {
    let salida = "";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("===================".green);
      console.log("    Tabla del ".green, `${base}`.blue);
      console.log("===================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/Table-${base}.txt`, salida);
    salida
      ? resolve(`Table-${base}.txt`)
      : reject("No se pudo crear el archivo");
  });
};

module.exports = {
  crearArchivo,
};
