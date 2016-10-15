var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CUNYStack' });
});

router.post("/results", function (req, res) {
    res.render('results', {
        school:req.body.school,
        subject:req.body.subject,
        courseID:req.body.courseID
    })
});




module.exports = router;
