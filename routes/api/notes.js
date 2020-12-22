const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");
const User = require("../../models/user");

//Post a new Note
router.post("/", auth, (req, res, next) => {
  const { userId, name } = req.body;
  User.findById(userId)
    .then((user) => {
      let newNote = {
        _id: new mongoose.Types.ObjectId(),
        NoteName: name,
      };
      user.notes.push(newNote);
      user
        .save()
        .then((result) => {
          return res.json({
            status: 201,
            message: "Created a new Note!",
            NoteName: result.NoteName,
            notes: result.notes,
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

//Delete a note
router.put("/:notesId/delete", auth, (req, res, next) => {
  const { userId, noteId } = req.body;
  User.findById(userId)
    .then((user) => {
      let remainingNotes = user.notes.filter((el) => {
        return String(el._id) !== String(noteId);
      });
      user.notes = remainingNotes;
      user
        .save()
        .then((result) => {
          return res.json({
            status: 200,
            message: "Deleted Successfully",
            notes: result.notes,
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

//Change the note name
router.put("/:notesId/modifyName", auth, (req, res, next) => {
  const { userId, noteId, noteName } = req.body;
  console.log(noteName);
  User.findById(userId)
    .then((user) => {
      if (noteName.length > 0) {
        console.log("Inside NoteName");
        let findedNote = user.notes.find((el) => {
          return String(el._id) === String(noteId);
        });
        findedNote.NoteName = noteName;
        console.log(findedNote);
        user
          .save()
          .then((result) => {
            return res.json({
              status: 200,
              message: "Name changed Successfully",
              notes: result.notes,
            });
          })
          .catch((error) => {
            console.log(error);
            return res.json({ error: error });
          });
      } else {
        return res.json({ message: "Please Enter a name" });
      }
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

//Edit Individual notes
router.put("/:notesId/edit", auth, (req, res, next) => {
  const { userId, noteId, newNotes } = req.body;
  User.findById(userId)
    .then((user) => {
      let findedNote = user.notes.find((el) => {
        return String(el._id) === String(noteId);
      });
      findedNote.notes = newNotes;
      user
        .save()
        .then((result) => {
          return res.json({
            status: 200,
            message: "Notes saved Successfully",
            notes: result.notes,
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

module.exports = router;
