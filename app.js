const express = require("express");
const app = express();

//middelware for put and delete request
const methodoverride= require('method-override')
app.use(methodoverride('_method'))

//middeleware to log httprequest and errors
const morgan = require('morgan');
app.use(morgan('tiny'))

//middleware to serve static file in public folder
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
//setting tempelate engine as ejs
app.set('view engine','ejs')

//routes
const storyRouters= require("./routes/storyRoutes")

//url for landing page
app.get("/",(req,res)=>{
   res.render('index')
})

//middleware for routes that start with /stories
app.use("/stories",storyRouters);


//middleware to handle pagenotfound error
app.use((req,res,next)=>{
   let err= new Error("Serevr cannot locate the given URL "+req.url)
   err.status=404;
   next(err)
})

//middleware to handle 500 internal server error
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
  console.log("server running on port: ", port);
});