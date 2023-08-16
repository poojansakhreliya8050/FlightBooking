const express =require("express");
const {PORT}=require("./config/serverConfig");
const apiRoutes=require("./routes/index")

const db=require("./models/index");


async function startServer(){

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",apiRoutes);

app.listen(PORT,async ()=>{
    console.log(`server start on ${PORT}..`);
    if(process.env.SYNC_DB){
    db.sequelize.sync({alter:true});
    } 
}); 

}

startServer();