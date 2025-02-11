import express from  'express';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const orders = []; // In a real app, we'd use a database

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-order', (req, res) => {
    // Get form data from request body
    const order = {
       name: req.body.name,
       email: req.body.email,
       message: req.body.message,
       event: req.body.event,
       timestamp: new Date()
    };
    
    // Save order to our array
    orders.push(order);
 
    // Log the orders array to the console
    console.log(orders);
    
    // Send confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
 });

 app.get('/admin/orders', (req, res) => {
    res.send(orders);
});


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});