const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    getAllStore: (req, res) => {
        modelStore
            .getAllStore()
            .then(response => {
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    getStoreItem: (req, res) => {
        const name = req.params.name;
        modelStore
            .getStoreItem(name)
            .then(response => {
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    },
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
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    deleteItem: (req, res) => {
        const id = req.params.id;
        modelStore
            .deleteItem(id)
            .then(response => {
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    },
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
                formResponse.put(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    sortByType: (req, res) => {
        const type = req.params.type;
        modelStore
            .sortByType(type)
            .then(response => {
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    sortByBranch: (req, res) => {
        const branch = req.params.branch;
        modelStore
            .sortByBranch(branch)
            .then(response => {
                formResponse.succes(res, 200, response);
            })
            .catch(error => console.log(error));
    }
};