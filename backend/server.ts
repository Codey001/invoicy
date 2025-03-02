import express from 'express';

const PORT = 5000;
const app = express();

app.get("/", (req,res) => {
    res.send("Server running");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})