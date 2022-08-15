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

// deployment configuration

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/build/index.html')));
}

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on ${process.env.NODE_ENV} at port ${PORT} `))
