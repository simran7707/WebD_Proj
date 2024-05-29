
let mongoose = require('mongoose')



let URI = "mongodb+srv://2022:2022@cluster0.st8dco2.mongodb.net/test"



let connectdb = async() => {
    try {
        let con = await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log("database is connected")
    } catch (err) {
        console.log(err)
    }
}


module.exports = connectdb
 