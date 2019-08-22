const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    getAllStore: (req, res) => {
        const param = {
            page: req.params.page || 1,
            limit: req.query.limit || 10,
            id: req.query.id,
            name: req.query.name,
            type: req.query.type,
            branch: req.query.branch
        }
        modelStore
            .getAllStore(param)
            .then(response => {
                formResponse.get(res, 200, response, param);
            })
            .catch(error => console.log(error));
    },
    getStoreItem: (req, res) => {
        const name = req.params.name;
        modelStore
            .getStoreItem(name)
            .then(response => {
                formResponse.get(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    getStoreById: (req, res) => {
        const id = req.params.id;
        modelStore.getStoreById(id).then(response => {
            formResponse.get(res, 200, response)
        }).catch(error => console.log(error))
    },
    sortByType: (req, res) => {
        const type = req.params.type;
        modelStore
            .sortByType(type)
            .then(response => {
                formResponse.get(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    sortByBranch: (req, res) => {
        const branch = req.params.branch;
        modelStore
            .sortByBranch(branch)
            .then(response => {
                formResponse.get(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    postStore: (req, res) => {
        const body = {
            data: req.body,
        };
        modelStore
            .postStore(body)
            .then(response => {
                formResponse.post(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    updateItem: (req, res) => {
        const body = {
            id: req.params.id,
            data: req.body,

        };
        modelStore
            .updateItem(body)
            .then(response => {
                formResponse.patch(res, 200, response);
            })
            .catch(error => console.log(error));
    },
    deleteItem: (req, res) => {
        const id = req.params.id;
        modelStore
            .deleteItem(id)
            .then(response => {
                formResponse.delete(res, 200, response, id);
            })
            .catch(error => console.log(error));
    },
};