constCustomer = require('../models/customer.js')

exports.index = (req, res) => {
    res.send('<h1> Customer Application</h1><hr><a href="/api/customer">รายชื่อลูกค้า</a>')
}

exports.findAll = (req, res) => {
    Customer.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).semd({
            msg: err.message
        })
    })
}