const express = require('express');
const cors = require('cors')

const DBconnect = require('./connection/dbConnect');
const app = express();
require('dotenv').config();

const task_notes = require('./routes/task_notes');
const task_user = require('./routes/task_user');

app.use(cors());
app.use(express.json());


app.use('/api/auth', task_user);
app.use('/api/notes', task_notes);

const start = async () => {
    try {
        await DBconnect(process.env.DB_URL);
        app.listen(8080, console.log("Connection Established"));

    } catch (err) {
        console.log("Connection not established", err);
    }
}
start();