const storage = require('node-persist')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function register(req,res) {
    const {name,username,email,password} = req.body
    if(!name||!email||!username||!password){
        return res.status(400).send({message: 'All fields are manadatory'})
    }
    const user = await storage.getItem(email)
    if(user){
        return res.status(400).send({message: 'Email ID is already registered'})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const newUser = {
        name,username,email,password: hashPassword
    }
    const resp = await storage.setItem(email,newUser)
    res.status(201).send({message: 'User registered successfully',createdObj: resp})
}
async function login(req,res) {
    const {email,password} = req.body
    if(!email||!password){
        return res.status(400).send({message: 'All fields are manadatory'})
    }
    const user = await storage.getItem(email)
    if(!user){
        return res.status(400).send({message: 'Email ID is not registered'})
    }
    const check = await bcrypt.compare(password,user.password)
    if(check)
    {
        const token = jwt.sign(user.email,"iamharshpratap")
        res.cookie('token',token)
        return res.status(200).send({message: 'User loggedin successfully',createdObj: user,token})
    }
    else
        return res.status(403).send({message: 'Invalid credentials'})
}
async function changePassword(req,res) {
    const {oldPassword,newPassword} = req.body
    if(!oldPassword||!newPassword){
        return res.status(400).send({message: 'All fields are manadatory'})
    }
    //email is coming from middleware
    const email = req.email
    const user = await storage.getItem(email)
    if(!user){
        return res.status(400).send({message: 'Email ID is not registered'})
    }
    // console.log(typeof(user.password));
    
    const check = await bcrypt.compare(oldPassword,user.password)
    if(check)
    {
        user.password = await bcrypt.hash(newPassword,10);
        storage.setItem(email,user)
        return res.status(200).send({message: 'Password changed successfully'})
    }
    else
        return res.status(403).send({message: 'Password'})
}

module.exports = {register,login,changePassword}