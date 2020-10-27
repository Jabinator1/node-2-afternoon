const express = require("express")
const { create, read, update, deleteFn } = require("./controllers/messages_controllers");

const app = express()
const port = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const baseUrl = "/api/messages"
app.post(baseUrl, create)
app.get(baseUrl, read)
app.put(`${baseUrl}/:id`, update)
app.delete(`${baseUrl}/:id`, deleteFn)


app.listen(port, () => console.log(`Server is running on port ${port}`))