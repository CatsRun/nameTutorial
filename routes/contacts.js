const router = require('express').Router();
const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

router.get('/contacts', (req, res) => {
    res.send('Contacts Home Page');
});
