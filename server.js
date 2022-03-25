const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

require('./server/config/mongoose.config'); 

require('./server/routes/pirate.routes')(app);
// require('./server/routes/check-saves.route')(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})