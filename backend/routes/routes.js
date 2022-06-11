const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/world', async (req, res) => {
    try {
        const data = await axios.get('https://api.coronatracker.com/v3/stats/worldometer/global')
        res.status(200).json(data.data)
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
})

router.get('/countries', async (req, res) => {
    try {
        const data = await axios.get('https://corona.lmao.ninja/v2/countries')
        res.status(200).json(data.data)
    } catch(err) {
        res.status(500).json({ msg: err.message })
    }
})

router.get('/internal', async (req, res) => {
    try {
        const data = await axios.get('https://static.pipezero.com/covid/data.json')
        res.status(200).json(data.data)
    } catch(err) {
        res.status(500).json({ msg: err.message })
    }
})

module.exports = router