const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    deleteItem: (req, res) => {
        const id = req.params.id;
        modelStore
            .deleteItem(id)
            .then(response => {
                formResponse.delete(res, 200, response, id);
            })
            .catch(error => console.log(error));
    },

}