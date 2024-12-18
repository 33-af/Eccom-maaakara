
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

app.use(
    cors({
        origin: [
            'https://eccom-maaakara.onrender.com',
            'http://localhost:5173',
        ], // Add allowed origins
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true, // Ensure cookies and credentials are sent
        allowedHeaders: ['Content-Type', 'Authorization'], // Ensure required headers are allowed
        exposedHeaders: ['Content-Length', 'X-Content-Type-Options'], // Optionally expose headers
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'static'), {
    setHeaders: (res, filePath) => {
        // CSS files
        if (filePath.endsWith('.css')) {
            res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
            res.set('Content-Type', 'text/css');
            res.set('Access-Control-Allow-Origin', '*');  // Allow cross-origin requests
        }

        // Image files (JPEG, PNG, WebP, GIF)
        else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            res.set('Content-Type', 'image/jpeg');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        } else if (filePath.endsWith('.png')) {
            res.set('Content-Type', 'image/png');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.set('Cache-Control', 'public, max-age=31536000');
        } else if (filePath.endsWith('.webp')) {
            res.set('Content-Type', 'image/webp');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.set('Cache-Control', 'public, max-age=31536000');
        } else if (filePath.endsWith('.gif')) {
            res.set('Content-Type', 'image/gif');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.set('Cache-Control', 'public, max-age=31536000');
        }
    }
}));

app.use('/static', express.static(path.join(__dirname, 'static'), {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (ext === '.css') res.set('Content-Type', 'text/css');
      if (ext === '.js') res.set('Content-Type', 'application/javascript');
      if (ext === '.jpg' || ext === '.jpeg') res.set('Content-Type', 'image/jpeg');
      res.set('Access-Control-Allow-Origin', '*'); // Allow cross-origin access
    },
  }));
  

console.log(path.join(__dirname, 'static'));




app.use(fileUpload({}));
app.use(cookieParser());

// Use the API routes
app.use('/api/user', require('./routes/users'));
app.use('/api/banner', require('./routes/banners'))
app.use('/api/meatJerk', require('./routes/meatJerks'))
app.use('/api/packing', require('./routes/packings'))
app.use('/api/pigJerk', require('./routes/pigJerk'))
app.use('/api/sausage', require('./routes/sausage'))
app.use('/api/chicken', require('./routes/chicken'))

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
