const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const blogRoutes = require("./blogController");
router.use("/blogs",blogRoutes);

const commentRoutes = require("./commentController");
router.use("/comments",commentRoutes);

module.exports = router;