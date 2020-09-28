const express = require('express')
const app = express();
const port = 8080
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public/home.html'));
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})