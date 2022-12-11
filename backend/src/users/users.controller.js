const { createHmac } = require('node:crypto');
const service = require("./users.service");
const { list: listPlaylists } = require("../playlists/playlists.controller")

// --- HASHING ---
const secret = 'abcdefg';


// --- VALIDATION MIDDLEWARE ---
// username string: no special characters, only a-z and numbers, is unique
const validUsername = async(req, res, next) => {
    const { data: { user_name} } = req.body
    // check if the username already exists, if it does, throw an error
    const usernameTaken = await service.userExists(user_name)
    if (usernameTaken){
        next({status: 400, message: "username unavailable"})
    }
    // no special characters.. build a regex w \w
    const invalidChars = /[\W]/
    if (invalidChars.test(user_name.trim())){
        next({status: 400, message: "please use alphanumeric characters only"})
    }

    next();
};

// logging in, make sure the inputs are only valid inputs as well, so no hackers can send scripts or anything
// valid email???
const validEmail = async(req, res, next) => {
    const { data: { email } } = req.body
    // needs to have the @ symbol with alphanumeric chars before it..
    // needs to have a . something (com, org, edu, whatever)
    if(!/\w+[@]\w+\.\w{2,}/.test(email)){
        next({status: 400, message: "enter a valid email"})
    }
    // if the @ symbol appears more than twice
    if(/[@]{2,}/.test(email)) {
        next({status: 400, message: "enter a valid email"})
    }

    // no spaces
    if (/[\s]+/.test(email.trim())) next({status: 400, message: "enter a valid email"})

    next();
};

// password string: at least 8 characters, one uppercase, one special character
const validPass = async(req, res, next) => {
    const { data: { password } } = req.body
    console.log(password)
    // no spaces
    if (/[\s]+/.test(password)) next({status: 400, message: "enter a valid password"})

    const lengthRegex = /.{8,}/
    const capsRegex = /[A-Z]{1,}/
    const special = /[!$%*?]{1,}/

    if (lengthRegex.test(password) && capsRegex.test(password) && special.test(password)){
        next();
    }else{
        next({status: 400, message: "not a valid password"});
    }
};

// --- ROUTER LEVEL MIDDLEWARE ---
async function logIn(req, res, next){
    console.log(req.body)
    const { data: { user_name, password } } = req.body

    // console.log(`username: ${user_name} | password: ${password}`);
    // console.log(hash)
    if(!user_name || !password){
        next({status: 404, message: "need a username and password"})
    }else {
        const hash = createHmac('sha256', secret)
                .update(password.trim())
                .digest('hex');
        const loggedIn = await service.logIn(user_name, hash);
        if(!loggedIn){
            next({status: 400, message: "username or password incorrect"})
        }else{
            res.json({data: loggedIn})
        }
    }
};

async function register(req, res, next){
    const { data: { user_name, email, password } } = req.body
    const hash = createHmac('sha256', secret)
        .update(password.trim())
        .digest('hex');
    console.log(hash);

    // await service.register(user_name.trim(), email.trim().toLowerCase(), password.trim())
    const newUser = await service.logIn(user_name.trim(), password.trim())
    console.log(newUser)
    res.json({ data: newUser})
};

async function getPlaylists(req, res, next){
    // console.log(req.params)
    // res.json("users controller: getPlaylists")
    next();
};

module.exports = {
    logIn,
    getPlaylists: [getPlaylists, listPlaylists],
    register: [validUsername, validEmail, validPass, register]
};