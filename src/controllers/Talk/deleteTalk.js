const {Talk} = require('../../db');

const deleteTalk = async (id) => {
    const talk = await Talk.findByPk(id);
    if(!talk){
        throw new Error('La charla que deseas eliminar no existe');
    }
    await talk.destroy();
    return;
}

module.exports = {deleteTalk};