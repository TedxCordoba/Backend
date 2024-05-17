const {User} = require('../db');

const validateOrador = async (UserId) => {
 const oradorRequested = await User.findByPk(UserId);
 if(!oradorRequested){
  throw new Error(`El usuario al que le deseas asignar la charla no existe`);
 }
 if(oradorRequested.isOrador === false){
  throw new Error(`El usuario: ${oradorRequested.name} no es orador`);
 }
 return true;
}

module.exports = {validateOrador};