import express from 'express'const PORT = 3777const app = express()app.get('/', (req, res) => {    res.send('Hello World dd!')})console.log('server starting on port', PORT)app.listen(PORT, () => {    console.log(`Example app listening on port ${ PORT }`)})