const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//####

const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//#####

app.use(express.static("public"));

app.listen(PORT, () => console.log(`The server is running on ${PORT} 🚀`));
