const User=require('../models/user')

exports.pushToLogin = (req, res, next)=>{
    res.render('./user/login')
};

exports.loginAuthentication = (req, res, next)=>{
    let email= req.body.email;
    let password=req.body.password;
    User.findOne({email:email})
    .then(user=>{
        if(user){
            user.comparePassword(password)
            .then(result=>{
                if(result){
                    req.session.user=user._id
                    req.flash("success","You have successfully logged in")
                    res.redirect('/users/profile')
                }else{
                    //console.log('wrong password')
                    req.flash("error","wrong password!")
                    res.redirect('/users/login')
                }
            })
        }else{
           // console.log('wrong email address')
            req.flash("error","wrong email address!")
            res.redirect('/users/login')
            
        }
    })
    .catch(err=>next(err))
};

exports.pushToSignup = (req, res, next)=>{
    res.render('./user/new')
};
exports.saveUser = (req, res, next)=>{
    let user= new User(req.body)
    user.save()
    .then(()=>{
        req.flash("success","Registration Successfull!")
       res.redirect('/users/login')
    })
    .catch(err=>{
        if(err.name==='ValidationError'){
           req.flash('error',err.message)
            return res.redirect('/users/new')
        }
        if(err.code===11000){
        req.flash('error',"Email address has been used")
         return res.redirect('/users/new')
         }
        next(err)
    })
};
exports.getProfile = (req, res, next)=>{
    let user = req.session.user;
    User.findById(user)
    .then(user=>{
        if(user){
            res.render('./user/profile',{user})
        }else{
            req.flash("error","Login to view your profile")
            res.redirect('/users/login')
        }
      
    })
    .catch(err=>next(err))
    
};
exports.logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err){
            return next(err)
        }else{
            res.redirect('/')
        }
    })
};
