import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`Linstening on: http://localhost:${PORT}`);
}

const handleProfile = (req,res) => {
    res.send("You are on my profile");
}

const handleHome = (req, res) => {
    res.send("hello from home");
}

app.get('/',handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);

