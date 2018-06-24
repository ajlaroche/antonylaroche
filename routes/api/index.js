const router = require("express").Router();
const contactRoutes = require("./contact");

// Articles routes
router.use("/contact", contactRoutes);


module.exports = router;
