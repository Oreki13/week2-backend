const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    postStore: (req, res) => {
        const body = {
            name: req.body.name,
            type: req.body.type,
            quantity: req.body.quantity,
            branch: req.body.branch
        };
        modelStore
            .postStore(body)
            .then(response => {
                formResponse.post(res, 200, response);
            })
            .catch(error => console.log(error));
    },
}