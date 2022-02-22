const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    default: 5,
    describe: "Base para generar table",
  })
  .option("li", {
    alias: "limite",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "Cantidad de valores en tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "¿Mostrar lista?",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    if (isNaN(argv.li)) {
      throw "El limite tiene que ser un numero";
    }

    return true;
  }).argv;


  module.exports = argv;