const {
  getAllUsesr,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = require("express").Router();
//or
/*
const express = require("express");
const router = express.Router();
*/

// users route
router.get("/", getAllUsesr);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
