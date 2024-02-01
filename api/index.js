require("dotenv").config();
const server = require("./src/server/index");
const BDD = require("./src/db/index");

const PORT = process.env.PORT || 3001;

BDD.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log("server listening on PORT: ", PORT);  
    })
})

