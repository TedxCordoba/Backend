const {User} = require('../db');

const validateOrador = async (UserId) => {
 const oradorRequested = await User.findByPk(UserId);
 console.log(oradorRequested);
 if(oradorRequested.isOrador === false){
  throw new Error('El usuario al que le deseas asignar la charla no es orador');
 }
 return true;
}

module.exports = {validateOrador};