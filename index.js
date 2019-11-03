const express = require('express')
const ejs = require('ejs')

const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
})

app.use('/public', express.static(`./public`))

app.listen(port, () => console.log(`The app running on port ${port}!`))
