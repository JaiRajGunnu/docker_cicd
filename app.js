const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
