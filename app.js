const express = require('express');
const app = express();


const path = require('path');

const routes = require('./routes/user/user_route');

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// konfigurasi ejs template
app.set('view engine', 'ejs');

// Set static folder
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/fonts')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.use("/", routes);

// run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
)