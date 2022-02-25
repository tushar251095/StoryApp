const express = require("express");
const app = express();
const methodoverride= require('method-override')
const morgan = require('morgan');

app.use(morgan('tiny'))
app.use(methodoverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

//routes
const storyRouters= require("./routes/storyRoutes")

app.get("/",(req,res)=>{
   res.render('index')
})
app.use("/stories",storyRouters);

app.use((req,res,next)=>{
   let err= new Error("Serevr cannot locate the given URL "+req.url)
   err.status=404;
   next(err)
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    if(!err.status){
        err.status=500;
        err.message="Internal server error";
    }
    res.status(err.status)
    res.render('error',{error:err})
})
//Starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
 // console.log("server running on port: ", port);
});