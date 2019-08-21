const db = require("../Config/dbConnect");
module.exports = {
    getAllStore: param => {
        return new Promise((resole, reject) => {
            let queryall = "SELECT * FROM store"
            let querpage = "SELECT * FROM store LIMIT ? OFFSET ?"
            let limit = param.limit * 1
            let offset = (param.page - 1) * limit
            let sql = [limit, offset]
            if (param.limit && param.page) {
                db.query(querpage, sql, (error, response) => {
                    if (!error) {
                        resole(response);
                    } else {
                        reject(error);
                    }
                });


            } else {
                db.query(queryall, (error, response) => {
                    if (!error) {
                        resole(response)
                    } else {
                        reject(error)
                    }
                })

            }
        });
    },
    getStoreItem: name => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM store WHERE name=?",
                [name],
                (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    },
    postStore: body => {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO store SET name=?, type=?, quantity=?, branch=?",
                [body.name, body.type, body.quantity, body.branch],
                (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    },
    deleteItem: id => {
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM store WHERE id=?", [id], (error, response) => {
                if (!error) {
                    resolve(response);
                } else {
                    reject(error);
                }
            });
        });
    },
    updateItem: body => {
        return new Promise((resolve, reject) => {
            db.query(
                "UPDATE store SET name=?, type=?, quantity=?, branch=? WHERE id=?",
                [body.name, body.type, body.quantity, body.branch, body.id],
                (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    },
    sortByType: type => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM store WHERE type=?",
                [type],
                (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    },
    sortByBranch: branch => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM store WHERE branch=?",
                [branch],
                (error, response) => {
                    if (!error) {
                        resolve(response);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    }
};