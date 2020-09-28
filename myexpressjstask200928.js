const express = require('express')
const app = express();
var PORT = process.env.PORT || 8080;
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
    res.sendFile(path.join(__dirname + '/about.html'));
    //res.send('Hello World!')
})

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})