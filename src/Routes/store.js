const express = require("express");
const store = require("../Controllers/store");

const router = express.Router();

router.get("/", store.getAllStore);
router.get("/:name", store.getStoreItem);
router.post("/", store.postStore);
router.delete("/:id", store.deleteItem);
router.patch("/:id", store.updateItem);
router.get("/type/:type", store.sortByType);
router.get("/branch/:branch", store.sortByBranch);

module.exports = router;