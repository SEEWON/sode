const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DBURI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const readDB = () => {
  client.connect((err, db) => {
    // perform actions on the collection object
    const dbo = db.db('mydb');
    dbo
      .collection('customers')
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });
};
