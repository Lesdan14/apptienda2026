import bcrypt from 'bcrypt';

const clave = '1234';

const claveEncriptada = await bcrypt.hash(clave, 10);

console.log(claveEncriptada);