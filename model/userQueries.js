const findALlUsers = 'SELECT * FROM users;';
const insertUser = 'INSERT INTO users SET ?;';

module.exports = {
    findAllUsers,
    insertUser,
};