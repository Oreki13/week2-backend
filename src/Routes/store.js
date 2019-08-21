const express = require("express");
const getStore = require("../Controllers/getStore");
const postStore = require("../Controllers/postStore");
const updateStore = require("../Controllers/updateStore");
const deleteStore = require("../Controllers/deleteStore");

const router = express.Router();

router.get("/", getStore.getAllStore);
router.get("/:name", getStore.getStoreItem);
router.get("/id/:id", getStore.getStoreById);
router.get("/type/:type", getStore.sortByType);
router.get("/branch/:branch", getStore.sortByBranch);
router.post("/", postStore.postStore);
router.delete("/:id", deleteStore.deleteItem);
router.patch("/:id", updateStore.updateItem);


module.exports = router;