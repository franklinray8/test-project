const fs = require('fs');
require('dotenv').config();

const config = {
  BASE_URL: process.env.BASE_URL,
  TOKEN: process.env.TOKEN,
  DOCUMENT_ID: process.env.DOCUMENT_ID,
  DOCUMENT_TYPE: process.env.DOCUMENT_TYPE,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  PIN: process.env.PIN,
  USER_ID: process.env.USER_ID,
};

// Guardar la configuración en un archivo JSON
fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
console.log("✅ Archivo config.json generado correctamente.");
