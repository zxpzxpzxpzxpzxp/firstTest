const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema = {
    name: String,
    age: Number,
    health: String,
    hobby:String
}
const mydata = mongoose.model('Cat', schema);

// const kitty1 = new mydata({ name: 'Zildjian2' });
// kitty1.save().then(() => console.log('meow'));

// const kitty2 = new mydata({ name: 'zhang3',age:1,health:"good" });
// kitty2.save().then(() => console.log('testmeow'));
mydata.find({name:"Zildjian"},(err,data)=>{console.log(data[0]._doc.name)})