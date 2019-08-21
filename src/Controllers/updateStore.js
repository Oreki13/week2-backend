const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    updateItem: (req, res) => {
        const body = {
            id: req.params.id,
            name: req.body.name,
            type: req.body.type,
            quantity: req.body.quantity,
            branch: req.body.branch
        };
        modelStore
            .updateItem(body)
            .then(response => {
                formResponse.patch(res, 200, response);
            })
            .catch(error => console.log(error));
    },
}