const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// some data for the API
var comments = [
  { "id": 1, "comment": "Easy to pay" },
  { "id": 2, "comment": "More Secure to store" },
  { "id": 3, "comment": "Need to add an extra feature" }
];



app.get('/api/food', function (req, res) {

    console.log("GET comments");
    res.send(comments);

});


app.post('/api/comments', function (req, res) {

    console.log("POST comment: " + req.body);

    // calculate the next ID
    let id = 1;
    if (comments.length > 0) {
        let maximum = Math.max.apply(Math, comments.map(function (f) { return f.id; }));
        id = maximum + 1;
    }

   
    let new_comment = {"id": id, "comment": req.body.comment};
    comments.push(new_comment);
    res.send(new_comment);

});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// HTTP listener
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;
