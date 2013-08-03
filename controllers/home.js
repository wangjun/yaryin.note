﻿function generateHashKey() {
    var d = new Date();
    return [d.getFullYear(),
        (d.getMonth() + 1),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        parseInt(Math.random() * 100).toString(32)].join('-');
}

module.exports = {
    index: function (req, res, next, helper) {
        if (!req.param('hashkey')) {
            res.redirect('/' + generateHashKey());
        } else {
            res.view({
                current: new Date() + req.param('hashkey')
            });
        }
    }
};