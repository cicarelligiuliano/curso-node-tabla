const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js");
const colors = require("colors");

console.clear();

// const [, , arg3 = "base=5", arg4 = "limite=10"] = process.argv;
// const [, base = 5] = arg3.split("=");
// const [, limite = 10] = arg4.split("=");

// console.log(base, limite);

// console.log(argv);

crearArchivo(argv.b, argv.li, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "Creado"))
  .catch((err) => console.log(err));
