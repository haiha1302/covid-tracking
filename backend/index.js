const express = require('express')
const cors = require('cors')
const route = require('./routes/routes')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors({
    origin: "*",
    methods: '*',
}))

app.use('/api', route)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))