const {deleteTalk} = require('../../controllers/Talk/deleteTalk');

const deleteTalkHandler = async (req, res) => {
    const {id} = req.params;
    try {
        await deleteTalk(id);
        res.status(200).json({message: "Charla eliminada exitosamente"});
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message});
    }
};

module.exports = {deleteTalkHandler};