const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = [];

// Create - Add a new item

app.post("/items", (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ message: "ID and Name are required!" });
    }

    data.push({ id, name });
    res.status(201).json({ message: "Item added successfully!", data });
});


// Read - Get all items
app.get("/items", (req, res) => {
    res.json(data);
});

// Read - Get item by ID
app.get("/items/:id", (req, res) => {
    const { id } = req.params;
    const item = data.find((d) => d.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found!" });
    }

    res.json(item);
});

// Update - Update an item by ID
app.put("/items/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const item = data.find((d) => d.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found!" });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required to update!" });
    }

    item.name = name;
    res.json({ message: "Item updated successfully!", data });
});

// Delete - Remove an item by ID
app.delete("/items/:id", (req, res) => {
    const { id } = req.params;
    const initialLength = data.length;

    data = data.filter((d) => d.id !== id);

    if (data.length === initialLength) {
        return res.status(404).json({ message: "Item not found!" });
    }

    res.json({ message: "Item deleted successfully!", data });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
