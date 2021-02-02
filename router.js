var express  = require("express"); //to use router meta
var router = express.Router();

const credetial = {
    email: "johndoe@gmail.com",
    password: "123"
}
//login user route
router.post('/login', (req, res)=>{
    if(req.body.email == credetial.email && req.body.password == credetial.password){
        req.session.user = req.body.email;
        //req.redirect('/dashboard');
        res.end("Login Successful");
    }else{
        res.end("Invalid username")
    }
});

module.exports =  router;