const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
app = express();
 
app.use(cors);
app.options('*', cors);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist/mei-rr2`));

app.get('/*', function(req, res) {
    res.sendFile(path.join(`${__dirname}/dist/mei-rr2`))
})

app.listen(process.env.PORT || 8080, () => console.log('running'));