const express = require('express');
const path = require('path');
const app = express();

// Getting our POST routes 
const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist')));


// using middleware
app.use('/posts', posts);

// catch all other routes requests and return index
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || 4600;

app.listen(4600, (reg, res) => {
    console.log(`RUNNING on port ${port}`);
});