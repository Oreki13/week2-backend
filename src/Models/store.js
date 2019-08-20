const db = require("../Config/dbConnect");
module.exports = {
  getAllStore: () => {
    return new Promise((resole, reject) => {
      db.query("SELECT * FROM store", (error, response) => {
        if (!error) {
          resole(response);
        } else {
          reject(error);
        }
      });
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
