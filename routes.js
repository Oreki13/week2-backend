const db = require ('./connect');

module.exports = function (app) {
  app.get ('/book', (req, res) => {
    db.query ('SELECT * FROM books', (error, response) => {
      const formResponse = {
        status: 200,
        data: response,
      };
      if (error) {
        console.log (error);
      } else {
        res.json (formResponse);
      }
    });
  });
  app.get ('/book/:title', (req, res) => {
    const title = req.params.title;
    console.log (typeof title, title);
    db.query (
      'SELECT * FROM books WHERE title=?',
      [title],
      (error, response) => {
        const formResponse = {
          status: 200,
          data: response,
        };
        if (error) {
          console.log (error);
        } else {
          res.json (formResponse);
        }
      }
    );
  });
  app.post ('/book', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    db.query (
      'INSERT INTO books SET title=?, author=?',
      [title, author],
      (error, response) => {
        const formResponse = {
          status: 202,
          data: response,
        };
        if (error) {
          console.log (error);
        } else {
          res.json (formResponse);
        }
      }
    );
  });
};
