import express from 'express';

const app=express();
app.use(express.json());

const PORT=3000;
app.get("/ping",(req,res)=>{
  req.body;
    res.send("pong");
}
)
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
}
)