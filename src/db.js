const DBinit = () => {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = process.env.DBURI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  // 다른 Database 사용 시 이 부분 값 수정
  const DBName = 'mydb';

  return { client, DBName };
};

// Collection 내 document 모두 list 모듈
const readCollection = (collectionName) => {
  const { client, DBName } = DBinit();
  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo
      .collection(collectionName)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });
};
module.exports.readCollection = readCollection;

// 새 collection 생성 모듈
const createCollection = (newCollectionName) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.createCollection(newCollectionName, (err, res) => {
      if (err) throw err;
      console.log(`Collection ${newCollectionName} created`);
    });
  });
};
module.exports.createCollection = createCollection;

// Collection 내에 document(1개) 추가 모듈
const insertOneInCollection = (insertingCollection, newObj) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.collection(insertingCollection).insertOne(newObj, (err, res) => {
      if (err) throw err;
      console.log('1 document inserted');
      db.close();
    });
  });
};
module.exports.insertOneInCollection = insertOneInCollection;

// Collection 내 document(여러 개) 추가 모듈
const insertManyInCollection = (insertingCollection, newObjArr) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.collection(insertingCollection).insertMany(newObjArr, (err, res) => {
      if (err) throw err;
      console.log(`${res.insertedCount} documents inserted`);
      db.close();
    });
  });
};
module.exports.insertManyInCollection = insertManyInCollection;

// Collection 내 document(하나) 삭제 모듈
// query는 obj 형식으로, ex) age가 23인 doc 하나 지우려면 query={age:23}
const deleteOneInCollection = (deletingCollection, query) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.collection(deletingCollection).deleteOne(query, (err, obj) => {
      if (err) throw err;
      console.log(`1 document deleted`);
      db.close();
    });
  });
};
module.exports.deleteOneInCollection = deleteOneInCollection;

// Collection 내 document(여러 개) 삭제 모듈
// query는 obj 형식으로, ex) address가 O로 시작하는 doc 모두 지우려면 query={address:/^O/}
const deleteManyInCollection = (deletingCollection, query) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.collection(deletingCollection).deleteMany(query, (err, obj) => {
      if (err) throw err;
      console.log(`Matching documents deleted.`);
      db.close();
    });
  });
};
module.exports.deleteManyInCollection = deleteManyInCollection;

// Collection 내 document(하나) Update 모듈
// query는 obj 형식으로, ex) age가 23인 doc 하나 수정하려면 query={age:23}
// newValue ex) {$set: {name: "Sean", age: "23"}}
const updateOneInCollection = (updatingCollection, query, newValue) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo
      .collection(updatingCollection)
      .updateOne(query, newValue, (err, res) => {
        if (err) throw err;
        console.log(`1 document updated`);
        db.close();
      });
  });
};
module.exports.updateOneInCollection = updateOneInCollection;

// Collection 내 document(여러 개) Update 모듈
// query는 obj 형식으로, ex) age가 20보다 큰 doc 모두 수정하려면 query={ age: { $gt: 20 } };
// newValue ex) {$set: {name: "Sean", age: "23"}}
const updateManyInCollection = (updatingCollection, query, newValue) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo
      .collection(updatingCollection)
      .updateMany(query, newValue, (err, res) => {
        if (err) throw err;
        console.log(`Matching documents updated.`);
        db.close();
      });
  });
};
module.exports.updateManyInCollection = updateManyInCollection;

// Collection 삭제 모듈
const dropCollection = (dropCollectionName) => {
  const { client, DBName } = DBinit();

  client.connect((err, db) => {
    const dbo = db.db(DBName);
    dbo.collection(dropCollectionName).drop((err, res) => {
      if (err) throw err;
      if (res) console.log(`Collection ${dropCollectionName} deleted`);
      db.close();
    });
  });
};
module.exports.dropCollection = dropCollection;
