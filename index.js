const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is the start of your linktree <3')
})

const PORT = process.env.PORT || 8080 

app.listen(PORT, () => {
    console.log(`We are mystically brewing at ${PORT}`)
})