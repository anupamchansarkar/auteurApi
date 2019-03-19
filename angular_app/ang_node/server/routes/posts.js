const express = require('express');
const router = express.Router();

const axios = require('axios');

const PostAPI = 'http://vm.auteur.com';

// GET POST
router.get('/', (req, res) => {
    axios.get(`${PostAPI}/register`).then(posts=>{
        res.status(200).json(posts.data);
    })
    .catch(error=> {
        res.status(500).send(error);
    })
});


module.exports = router;