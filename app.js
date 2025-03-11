import express from  'express';
import pool from './db.js';
import validateForm from './services/validation.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-order', async (req, res) => {
    // Get form data from request body
    const order = {
       name: req.body.name,
       email: req.body.email,
       message: req.body.message,
       event: req.body.event,
       timestamp: new Date()
    };
    
    const validationResult = validateForm(order); 
    if (!validationResult.isValid) { 
        console.log(validationResult.errors); 
        return res.status(400).render('home', { errors: validationResult.errors, order }); 
    }
    try {
        const sql = `INSERT INTO orders (name, email, message, event, timestamp) VALUES (?, ?, ?, ?, ?)`; 
        await pool.execute(sql, [order.name, order.email, order.message, order.event, order.timestamp]); 
        console.log("Order inserted successfully."); // log success
        res.render('confirmation', { order });
    } catch (err) {
        console.error("Error inserting order:", err); //error logging
        res.status(500).send("Server error: Unable to save your order."); // send error response
    }
    
    // Send confirmation page
    // res.render('confirmation', { order });
 });

 app.get('/admin/orders', async (req, res) => {
    try {
        const [orders] = await pool.query('SELECT * FROM orders'); 
        res.render('admin', { orders });
    } catch (err) {
        console.error("Error retrieving orders:", err); // error logging
        res.status(500).send("Server error: Unable to retrieve orders."); // send error response
    }
});


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});