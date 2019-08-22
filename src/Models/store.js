const db = require("../Config/dbConnect");
module.exports = {
    getAllStore: param => {
        return new Promise((resole, reject) => {
            let limit = param.limit * 1;
            let offset = (param.page - 1) * limit;
            console.log(param.name);

            if (param.id) {
                db.query(
                    "SELECT * FROM store WHERE id LIKE ? LIMIT ? OFFSET ?",
                    [param.id, limit, offset],
                    (error, response) => {
                        if (!error) {
                            resole(response);
                        } else {
                            reject(error);
                        }
                    }
                );
            } else if (param.name) {
                db.query(
                    "SELECT * FROM store WHERE name LIKE ? LIMIT ? OFFSET ?",

                    [param.name, limit, offset],
                    (error, response) => {
                        if (!error) {
                            resole(response);
                        } else {
                            reject(error);
                        }
                    }
                );
            } else if (param.type) {
                db.query(
                    "SELECT * FROM store WHERE type LIKE ? LIMIT ? OFFSET ?",

                    [param.type, limit, offset],
                    (error, response) => {
                        if (!error) {
                            resole(response);
                        } else {
                            reject(error);
                        }
                    }
                );
            } else if (param.branch) {
                db.query(
                    "SELECT * FROM store WHERE branch LIKE ? LIMIT ? OFFSET ?",

                    [param.branch, limit, offset],
                    (error, response) => {
                        if (!error) {
                            resole(response);
                        } else {
                            reject(error);
                        }
                    }
                );
            } else {
                db.query(
                    "SELECT * FROM store LIMIT ? OFFSET ? ", [limit, offset],

                    (error, response) => {
                        if (!error) {
                            resole(response);
                        } else {
                            reject(error);
                        }
                    }
                );
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
    getStoreById: id => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM store WHERE id=?", [id], (error, response) => {
                if (!error) {
                    resolve(response);
                } else {
                    reject(error);
                }
            });
        });
    },
    postStore: body => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO store SET ?", [body.data], (error, response) => {
                if (!error) {
                    resolve(response);
                } else {
                    reject(error);
                }
            });
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
                "UPDATE store SET ? WHERE id=?",
                [body.data, body.id],
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