const service = require("./users.service");

// TODO: middleware needed: 
// new user
// login

// TODO: validation middleware: 
// username string: no special characters, only a-z and numbers, is unique
// password string: at least 8 characters, one uppercase, one special character
// logging in, make sure the inputs are only valid inputs as well, so no hackers can send scripts or anything

async function logIn(req, res, next){
    console.log(req.query)
    const { username, password } = req.query
    console.log(`username: ${username} | password: ${password}`);
    if(!username || !password){
        next({status: 404, message: "need a username and password"})
    }else {
        const loggedIn = await service.logIn(username, password);
        if(!loggedIn){
            next({status: 400, message: "username or password incorrect"})
        }else{
            res.json(loggedIn)
            // TODO: send a token???
        }
    }
};

module.exports = {
    logIn
}