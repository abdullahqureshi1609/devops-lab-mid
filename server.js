const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database Integration (Creates a local file called 'database.db')
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database successfully! No cloud needed.');
        // Create the tasks table if it doesn't exist
        db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)');
    }
});

// Routes
app.get('/api/tasks', (req, res) => {
    db.all('SELECT * FROM tasks', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/api/tasks', (req, res) => {
    const title = req.body.title;
    db.run('INSERT INTO tasks (title) VALUES (?)', [title], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Return the newly created task
        res.json({ id: this.lastID, title: title });
    });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));