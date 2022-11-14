const knex = require("../db/connection");

function logIn(user_name, user_password){
    return knex("users")
    // .select("*")
    .where({user_name, user_password})
    .returning("*")
    .then(user => user[0])
};

module.exports = {
    logIn
}