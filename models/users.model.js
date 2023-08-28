const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Sagor Mollick",
    email: "sagor@gmail.com",
  },

  {
    id: uuidv4(),
    username: "Alok Mollick",
    email: "alok@gmail.com",
  },
];

module.exports = users;
