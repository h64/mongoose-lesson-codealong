// Required Modules
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')

// Variables
const rowdyResults = rowdy.begin(app)

// This sets up the DB connection
require('./models')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Controllers
app.use('/posts', require('./controllers/PostController'))

// Routes

// Start the server!
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    console.log('Server is now listening at port:', PORT)
})