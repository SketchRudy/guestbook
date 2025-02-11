import express from  'express';

const app = express();

app.use(express.static('public'));

app.get('', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// app.get('/test', (req, res) => {
//     res.send("Different text");
// });

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});