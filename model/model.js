const mongoose = require('mongoose')

let schema= new mongoose.Schema({
    roll:{type:String,required:true,unique:true},
    date_of_adm:{type:Date,default:Date.now},
    name:{type:String,required:true},
    marks:{type:Number,required:true}
})

let Student = new mongoose.model("Student",schema)
saveDoc=()=>{
    let s1=new Student({
        roll:"19",
        name:"aaryan",
        marks:"25",
        repeat:false
    })

    

}
saveDoc()
module.exports=saveDoc