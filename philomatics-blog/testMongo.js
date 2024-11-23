const { Admin, Increment, setSecretKey } = require("./models/models");
const { setConfig } = require("./Server/configParser");
const readline = require("readline");
const mongoose = require("mongoose");

/*Models */
incrementDb = new Increment();

/*Blog settings*/
var blogName;


/****************
Database promises
****************/

function initializeMongoose() {
  promise = new Promise(function (resolve, reject) {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    mongoose.connect(`mongodb://127.0.0.1/${blogName}_blog`);
    const db = mongoose.connection;
    db.on("error", function () {
      reject("Connection failure!");
    });
    db.on("open", function () {
      console.log("IT WORKS HALLELUJA")
      resolve();
    });
  });
  return promise;
}
initializeMongoose();