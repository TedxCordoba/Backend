const {updateUser} = require('../../controllers/User/updateUser');

const updateUserHandler = async (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    try {
        const updatedUser = await updateUser(id, userData);
        res.status(200).json({message: " Usuario actualizado con éxito " ,updatedUser});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {updateUserHandler};