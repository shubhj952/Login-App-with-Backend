const signupCheck = (req, res) => {
  let userfullname = req.body.userfullname;
  let username = req.body.username;
  let password = req.body.password;

  req.conn.query(
    "insert into users(userfullname, username, password) values(?,?,?)",
    [userfullname, username, password],
    (error, result) => {
      if (error) {
        res.status(500).send({
          errorStatus: true,
          errorData: error,
          msg: "error in query",
          data: [],
        });
      } else {
        res.status(201).send({
          errorStatus: false,
          errorData: [],
          msg: "User created",
          data: result,
        });
      }
    }
  );
};

const loginCheck = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  req.conn.query(
    "select * from users where username = ? and password = ?",
    [username, password],
    (error, result) => {
      if (error) {
        res.status(500).send({
          errorStatus: true,
          errorData: error,
          msg: "error in query",
          data: [],
        });
      } else {
        if (Object.keys(result).length) {
          res.status(201).send({
            errorStatus: false,
            errorData: [],
            msg: "User authenticated",
            data: result,
            check: 200,
          });
        } else {
          console.log(result);
          res.status(404).send({
            errorStatus: false,
            errorData: [],
            msg: "User not authenticated",
            data: result,
          });
        }
      }
    }
  );
};

module.exports = {
  signupCheck,
  loginCheck
};
