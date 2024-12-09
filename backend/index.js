import express from 'express'
import users from './user.js';

const app = express();

app.get("/",(req, res)=>{
    res.send("Server is ready")
})

app.get("/api/user",(req,res)=>{
    res.send(users)
})

const port =process.env.PORT || 3001

app.listen(port,()=>{
    console.log('serve at http://localhost:${port}')
})