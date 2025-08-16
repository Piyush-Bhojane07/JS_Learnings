const express = require("express")

const cors = require("cors")
const morgan = require("morgan")
const  axios = require("axios")
const app = express();

const PORT = process.env.PORT || 3000;

//global middlewae
app.get("/health", (req, res) => {
    res.json({ status : "ok"})
})


app.get("/hospital", (req, res) => {
    res.json({status : "ok"})
})



app.get("/fitness" , (req, res) => {
    res.json({status : "ok"})
})

app.get("/hello" , (req, res) => {
    const name = req.query.name || "piyush"
    res.json({message : `hello, ${name}`})
})

app.get("/info", (req, res) => {
    const namee = req.query.name || "sarthak"
    res.json({ message : `info of -> ${namee}`})
})

const user = [
  { id: 1, name: "PIyush" },
  { id: 2, name: "sarthak" },
];

app.get("/infoo/:id", (req, res) => 
{
    const id = Number(req.params.id)
    const userr = user.find(pt => pt.id === id)
    // console.log(user)
    res.json(userr)
})

app.listen(PORT, () => {
    console.log(`server running at Http: //localhost:${PORT}`)
})

/*
const express = require("express")
const app = express()
const PORT = process.evn.PORT || 3000


app.get("", (req, res) => {
    res.json({status : "ok"})
})

app.listen(PORT, () => {
        clg(`server start at port http://localhost:${port}/endpoints`)
    })
*/




