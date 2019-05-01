const models = require("../models");

module.exports = {
    index: (req, res) =>
    {
        models.hello.findOne()
            .then(hello =>
            {
                res.json({ hello: hello });
            })
            .catch(error =>
            {
                console.log(error);
                res.status(500).json({ ERROR: error });
            });
    }
};