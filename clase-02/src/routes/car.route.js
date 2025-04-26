const express = require('express');
const router = express.Router();
/* --- */
const {carController} = require('../controllers');

router.get('/', carController.getAll);
router.post('/', carController.create);
router.get('/:id', carController.findById);
router.delete('/:id', carController.deleteById);

module.exports = router;