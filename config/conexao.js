const mongoose = require("mongoose");
const banco =
  "mongodb://Eduarda:duda123@ac-u32d0ox-shard-00-00.hfczcqq.mongodb.net:27017,ac-u32d0ox-shard-00-01.hfczcqq.mongodb.net:27017,ac-u32d0ox-shard-00-02.hfczcqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-p9ilix-shard-0&authSource=admin&retryWrites=true&w=majority";
//const banco = "mongodb://localhost:27017/aula"
//const banco = "mongodb+srv://diego:diego@cluster0.ajiapmy.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
