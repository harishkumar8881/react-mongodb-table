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
mongoose.connect("mongodb+srv://harish:<password>@cluster0.nnljx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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
app.use(express.static('client/build'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

app.use('/api', productRoute);
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});