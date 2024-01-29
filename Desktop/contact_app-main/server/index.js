const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./db/db_connection");
const contactRouter = require("./routes/contacts.js");
const app = express();
const multer = require("multer");
dotenv.config();

app.use(express.json());

app.listen(process.env.PORT, ()=>
{
    connectDB();
    console.log("App is running at port: " + process.env.PORT);
})

//upload images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload");
    },
    filename: (req, file, cb) => {
        cb(null,"image.png");
    },
});

const upload = multer({storage: storage});

app.post("/upload", upload.single("file"), (req, res) => 
{
    res.status(200).json({status: "SUCCESS", msg: "Image has been uploaded"});
});

//routes
app.use("/contact", contactRouter);


app.get("/", (req, res)=>
{
    res.status(200).json("This is the main page of the api");
})