const express = require("express");
const cors = require("cors");
const products = require("./data/products");
const app = express();
let cart = [];
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Hypebeast API");
});

app.get("/products", (req, res) => {
    res.json(products);
});

// Get Cart
app.get("/cart", (req, res) => {
    res.json(cart);
});


// Add to Cart
app.post("/cart", (req, res) => {
    const { id, quantity } = req.body;
    const product = products.find((p) => p.id === id);
    if (!product) return res.status(404).send("Product not found");
  
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  
    res.json(cart);
});

app.delete("/cart/:id", (req, res) => {
    cart = cart.filter((item) => item.id !== parseInt(req.params.id));
    res.json(cart);
});

app.get("/products/:id", (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send("Product not found");
    res.json(product);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
