const models = require("../models");

module.exports = {
    index: (req, res) =>
    {
        models.Hello.find({})
            .then(hellos =>
            {
                res.json({ hellos: hellos });
            })
            .catch(error =>
            {
                console.log(error);
                res.status(500).json({ ERROR: error });
            });
    }
};