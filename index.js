
const express = require('express');
const cors=require("cors")
const app =express();
app.use(cors())
app.use(express.json());


const port=5000;
app.get("/",(req,res)=>{
    res.send('wow I am Romzan excited I am from learing node express with nodemon auto metic restart')
});
// usequery 
const users =[
    {
        id: 0,
        name: "Samiya",
        email: "samiya@gmail.com",
        phone:"01821323123"
    },
     {
         id: 1,
         name: "Soniya",
         email: "samiya@gmail.com",
         phone: "01821323123"
     },
      {
          id: 2,
          name: "Srabonnti",
          email: "samiya@gmail.com",
          phone: "01821323123"
      },
       {
           id: 3,
           name: "Sumaiya",
           email: "samiya@gmail.com",
           phone: "01821323123"
       },
        {
            id: 4,
            name: "Saliya",
            email: "samiya@gmail.com",
            phone: "01821323123"
        }

]

//  dynamic api use
app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user=> user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
         res.send(users)
    }
   
})
// app post method
app.post("/users",(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log("hitting   the post...",req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})
// app get method
app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=users[id] 
    res.send(user);
//    console.log(req.params.id)
});
app.get("/fruits",(req,res)=>{
    res.send("Only fruits Yummy yummy test")
})
app.get("/mangoes", (req, res) => {
    res.send(["mango","banna",])
})
app.get("/fruits/mangoes/fazli",(req,res)=>{
    res.send("yummy yummy tock marka fazli");
})

app.listen(port,()=>{
    console.log('listening to port',port);
})