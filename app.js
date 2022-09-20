const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

let health_check = require('./controllers/helth_check');
// const db = require('./models');

dotenv.config();
const PORT = process.env.PORT || 8000
const app = express();


const CORS = {
    origin: "http://localhost:8001"
}
// db.sequelize.sync()
//     .then(() => {
//         console.log("DB Synced")
//     })
//     .catch((err) => {
//         console.log("Failed to sync DB: " + err.message);
//     })
// SettTemplate rendering engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.json())
app.use(cors(CORS))
app.use('/api', require('./routes/master_apis'))
app.use('/user', require('./routes/auth_apis'))

// Routes
app.get('/health-check', health_check.health_check)
app.get('/', (req, res) => {
    console.log(`Your port is ${PORT}`);
    res.render("hello")
});


// Run server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
