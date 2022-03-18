const express = require("express");
const controller = require("../controllers/storyController");
const router= express.Router()

//Show all stories
router.get("/",controller.index);

//Show an HTML form to create a new story 
router.get("/new",controller.new);

//Create a new story
router.post("/",controller.create);

//Show details of the story identified by id
router.get("/:id",controller.show);

//Show an HTML form to edit the story identified by id
router.get("/:id/edit",controller.edit);

//Update the story identified by id
router.put("/:id",controller.update);

//Delete the story identified by id
router.delete("/:id",controller.delete);

module.exports= router;