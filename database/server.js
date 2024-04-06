const express= require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `hname`,`address`,`email`, `password`,`phone`) VALUES (?)";
    const values = [
    req.body.name,
    req.body.hname,
    req.body.address,
    req.body.email,
    req.body.password,
    req.body.phone,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})



app.post('/donate', (req, res) => {
    const sql = "INSERT INTO donate (`food`, `quantity`,`address`,`date`,`phone`,`name`) VALUES (?)";
    const values = [
    req.body.food,
    req.body.quantity,
    req.body.address,
    req.body.date,
    req.body.phone,
    req.body.name,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/donate', (req, res) => {
    const sql = "SELECT * FROM donate";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching donation data:", err);
            return res.json("Error");
        }
        return res.json(data);
    });
});


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` =? AND `password` =?";
    db.query(sql, [req.body.email,req.body.password], (err, data) =>{
        if(err) {
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");

        }else{
            return res.json("Faile");
        }
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})