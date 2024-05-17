const express = require('express');
const router = express.Router();
const Cours = require('../models/Cours');

router.get('/', async (req, res) => {
    try {
        const cours = await Cours.findAll();
        res.json(cours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

