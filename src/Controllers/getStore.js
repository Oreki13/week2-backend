const modelStore = require("../Models/store");
const formResponse = require("../Helpers/formResponse");

module.exports = {
    getAllStore: (req, res) => {
        const param = {
            limit: req.query.limit,
            page: req.query.page
        }
        modelStore
            .getAllStore(param)
            .then(response => {
                formResponse.get(res, 200, response);
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
    }
};