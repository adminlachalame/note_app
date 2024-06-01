const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.getAllNotes);
router.post('/add', noteController.addNote);
router.post('/delete/:id', noteController.deleteNote);
router.put('/update/:id', noteController.updateNote);

//api
router.get('/api/notes', noteController.getAllNotes);
router.post('/api/notes', noteController.addNote);
router.put('/api/notes/:id',noteController.updateNote);
router.post('/api/notes/:id', noteController.apiDeleteNote);

module.exports = router;