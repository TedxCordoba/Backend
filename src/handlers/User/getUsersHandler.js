const { getUsers } = require('../../controllers/User/getUsers');
const { getUserByUserName } = require('../../controllers/User/getUserByUsername');

const getUsersHandler = async (req, res) => {
    const { username } = req.query;

    try {
        const users = username ?  await getUserByUserName(username) : await getUsers() ;
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getUsersHandler };