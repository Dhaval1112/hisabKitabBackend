const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://m001-student:20mca136@hisab.usaqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dbname = "TestHisabKitab";
const collection = "Test";

async function main() {
  // we'll add code here soon
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbname);

    const col = db.collection(collection);
    const changeStream = col.watch();
    changeStream.on("change", (data) => {
      console.log(data);
    });
    const jay = col.findOne();
    console.log(jay);

    return jay;
  } catch (error) {
    console.log(error);
  }
}

main().then((jay) => {
  console.log(jay);
});
