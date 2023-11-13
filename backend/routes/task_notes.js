const express = require('express');
const router = express.Router();
const { createNotes, getNotes, deleteNotes } = require('../all_tasks/notes');
const fetchUser = require('../middleware/verify/Login_auth');


router.route('/addNote').post(fetchUser, createNotes);
router.route('/fetchNotes').get(fetchUser, getNotes);
router.route('/deleteNote/:id').delete(fetchUser, deleteNotes);


module.exports = router;
