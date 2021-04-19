const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');
const os = require('os');

//routes
const productRoute = require('./routes/product');

env.config();
const PORT = process.env.PORT || 2000;

//mongodb connection
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL || "mongodb://localhost:27017/react-mongodb-table", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}).then(() => {
    console.log("Mongodb Database Connected");
})


app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/public", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "production"){
    app.use(express.static('client/build')); 
}

app.use('/api', productRoute);
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});