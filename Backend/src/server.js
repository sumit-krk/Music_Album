const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const connect = require("./configs/db")

const albumController = require("./controllers/album.controller")
const artistController = require("./controllers/artist.controller")

app.use(express.json())

app.use("/album", albumController)

app.use("/artist", artistController)

const port = 3010

app.listen(port, async function() {
    await connect()
    console.log(`Server running on ${port}`);
})