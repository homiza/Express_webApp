var express  = require("express"); //to use router meta
var router = express.Router();

const credential = {
    email: "johndoe@gmail.com",
    password: "123"
}
//login user route
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    }else{
        res.end("Invalid username")
    }
});



//route for dashboard
router.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }else{
        res.send("Unauthorised user")
    }
})


//route for logout
 router.get('/logout', (req, res)=>{
     req.session.destroy(function(err){
         if(err){
            console.log(err);
            res.send("Error");
         }else{
             res.render('base',{title:"Express", logout:"Logout Successful!!"})
         }
     })
 })

module.exports =  router;