const express = require('express');
const router = express.Router();
const pool = require('../queries');

router.get('/filmCategory/:category_id', (req, res) => {
    const category_id = req.params.category_id
    const sql = `
    SELECT * FROM film f INNER JOIN film_category fc ON fc.film_id = f.film_id
    INNER JOIN category c USING (category_id) WHERE category_id=$1
    `;
    pool.query(sql, [category_id], (error, result) => {
        if (error) throw error;
        res.send(result.rows);
    });
});

module.exports = router;
