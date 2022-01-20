const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

const{ List } = require('./db/models/list.model');
const { Report } = require('./db/models/report.model');

app.use(bodyParser.json());

app.get('/lists',(req,res)=>{
    List.find({}).then(lists=>{
        res.send(lists);
    })
   
})

app.post('/lists',(req, res)=>{

    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
});

app.get('/reports',(req,res)=>{
    Report.find({}).then(reports=>{
        res.send(reports);
    })
   
})

app.post('/reports',(req, res)=>{

    let title = req.body.title;
    let month = req.body.month;
    let subscriptions = req.body.subscriptions;
    let newReport = new Report({
        title,
        month,
        subscriptions
    });
    newReport.save().then((listDoc) => {
        res.send(listDoc);
    })
});


app.listen(3000,()=>{
   console.log("Server on port 3000");
})