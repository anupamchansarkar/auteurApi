const express = require('express');
const router = express.Router();

const axios = require('axios');

const PostAPI = 'http://vm.auteur.com';

// GET POST
router.get('/', (req, res) => {
    axios.get(`${PostAPI}/register`).then(posts=>{
        console.log(posts.data);
    })
});




module.exports = router;