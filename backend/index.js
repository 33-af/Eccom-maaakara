
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const PORT = process.env.PORT || 5001;


require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.use('*', cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://eccom-maaakara.onrender.com',
            'http://localhost:5173' 
        ];

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); 
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            res.set('Content-Type', 'image/jpeg');
        } else if (filePath.endsWith('.png')) {
            res.set('Content-Type', 'image/png');
        }
    }
}));


app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({}));
app.use(cookieParser());

// Use the API routes
app.use('/api/user', require('./routes/users'));
app.use('/api/banner', require('./routes/banners'))
app.use('/api/meatJerk', require('./routes/meatJerks'))
app.use('/api/packing', require('./routes/packings'))
app.use('/api/pigJerk', require('./routes/pigJerk'))
app.use('/api/sausage', require('./routes/sausage'))

app.get('/', (req, res) => {
    res.send("Welcome to the API!");
});

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
module.exports = app;
