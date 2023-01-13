const mongoose = require('mongoose')
const uri = "mongodb+srv://erdeneochir:<password>Erdene6207.sfewaib.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Database is successfully connected,');
    } catch (error) {
        console.log(error);
    }
}