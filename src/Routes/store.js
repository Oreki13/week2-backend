const express = require("express");

const getStore = require("../Controllers/store");

const router = express.Router();

router.get("/:page", getStore.getAllStore);
router.get("/search/", getStore.getStoreItem);
router.get("/page/", getStore.getStoreById);


router.post("/", getStore.postStore);
router.delete("/:id", getStore.deleteItem);
router.patch("/:id", getStore.updateItem);


module.exports = router;