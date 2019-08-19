const db = require("./connect");

module.exports = function(app) {
  app.get("/store", (req, res) => {
    db.query("SELECT * FROM store", (error, response) => {
      const formResponse = {
        status: 200,
        data: response
      };
      if (error) {
        console.log(error);
      } else {
        res.json(formResponse);
      }
    });
  });
  app.get("/store/:name", (req, res) => {
    const name = req.params.name;
    db.query("SELECT * FROM store WHERE name =?", [name], (error, response) => {
      const formResponse = {
        status: 200,
        data: response
      };
      if (error) {
        console.log(error);
      } else {
        res.json(formResponse);
      }
    });
  });
  app.post("/store", (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const branch = req.body.branch;
    db.query(
      "INSERT INTO store SET name=?, type=?, quantity=?, branch=?",
      [name, type, quantity, branch],
      (error, response) => {
        const formResponse = {
          status: 202,
          data: response
        };
        if (error) {
          console.log(error);
        } else {
          res.json(formResponse);
        }
      }
    );
  });
  app.delete("/store/:id", (rGETeq, res) => {
    const id = req.params.id;
    console.log(typeof id, id);
    db.query("DELETE FROM store WHERE id=?", [id], error => {
      if (error) {
        console.log(error);
      } else {
        res.send("Berhasil Dihapus");
      }
    });
  });
  app.put("/store/", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const branch = req.body.branch;
    db.query(
      "UPDATE store SET title =?, quantity=? WHERE store.id =?;",
      [name, type, quantity, branch, id],
      error => {
        if (error) {
          console.log(error);
        } else {
          res.send("Berhasil Diedit");
        }
      }
    );
  });
  app.get("/store/type/:type", (req, res) => {
    const type = req.params.type;
    db.query("SELECT * FROM store WHERE type =?", [type], (error, response) => {
      const formResponse = {
        status: 200,
        data: response
      };
      if (error) {
        console.log(error);
      }
      if (response.length === 0) {
        res.send("Not Found");
      } else {
        res.json(formResponse);
      }
    });
  });
  app.get("/store/branch/:branch", (req, res) => {
    const branch = req.params.branch;
    db.query(
      "SELECT * FROM store WHERE branch =?",
      [branch],
      (error, response) => {
        const formResponse = {
          status: 200,
          data: response
        };
        if (error) {
          console.log(error);
        }
        if (response.length === 0) {
          res.send("Not found");
        } else {
          res.json(formResponse);
        }
      }
    );
  });
  app.patch("/store/:id", function(req, res) {
    db("store")
      .where({ id: req.params.id })
      .update(req.body)
      .returning("*")
      .then(function(data) {
        res.send(data);
      });
  });
};
