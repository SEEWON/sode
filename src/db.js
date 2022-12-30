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
const readCollection = async (collectionName) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(collectionName);
  try {
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    return findResult;
  } catch (err) {
    console.error(err);
  }
};
module.exports.readCollection = readCollection;

// 새 collection 생성 모듈
const createCollection = async (newCollectionName) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  try {
    await db.createCollection(newCollectionName);
    console.log(`Successfully created collection ${newCollectionName}`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.createCollection = createCollection;

// Collection 내에 document(1개) 추가 모듈
const insertOneInCollection = async (insertingCollection, newObj) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(insertingCollection);
  try {
    await collection.insertOne(newObj);
    console.log('1 document inserted');
  } catch (err) {
    console.error(err);
  }
};
module.exports.insertOneInCollection = insertOneInCollection;

// Collection 내 document(여러 개) 추가 모듈
const insertManyInCollection = async (insertingCollection, newObjArr) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(insertingCollection);
  try {
    const res = await collection.insertMany(newObjArr);
    console.log(`${res.insertedCount} documents inserted`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.insertManyInCollection = insertManyInCollection;

// Collection 내 document(하나) 삭제 모듈
// query는 obj 형식으로, ex) age가 23인 doc 하나 지우려면 query={age:23}
const deleteOneInCollection = async (deletingCollection, query) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(deletingCollection);
  try {
    await collection.deleteOne(query);
    console.log('1 document deleted');
  } catch (err) {
    console.error(err);
  }
};
module.exports.deleteOneInCollection = deleteOneInCollection;

// Collection 내 document(여러 개) 삭제 모듈
// query는 obj 형식으로, ex) address가 O로 시작하는 doc 모두 지우려면 query={address:/^O/}
const deleteManyInCollection = async (deletingCollection, query) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(deletingCollection);
  try {
    const res = await collection.deleteMany(query);
    console.log(`${res.deletedCount} documents deleted`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.deleteManyInCollection = deleteManyInCollection;

// Collection 내 document(하나) Update 모듈
// query는 obj 형식으로, ex) age가 23인 doc 하나 수정하려면 query={age:23}
// newValue ex) {$set: {name: "Sean", age: "23"}}
const updateOneInCollection = async (updatingCollection, query, newValue) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(updatingCollection);
  try {
    await collection.updateOne(query, newValue);
    console.log(`1 document updated`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.updateOneInCollection = updateOneInCollection;

// Collection 내 document(여러 개) Update 모듈
// query는 obj 형식으로, ex) age가 20보다 큰 doc 모두 수정하려면 query={ age: { $gt: 20 } };
// newValue ex) {$set: {name: "Sean", age: "23"}}
const updateManyInCollection = async (updatingCollection, query, newValue) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(updatingCollection);
  try {
    const res = await collection.updateMany(query, newValue);
    console.log(`${res.modifiedCount} document(s) updated`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.updateManyInCollection = updateManyInCollection;

// Collection 삭제 모듈
const dropCollection = async (dropCollectionName) => {
  const { client, DBName } = DBinit();
  await client.connect();
  console.log('Connected to server');

  const db = client.db(DBName);
  const collection = db.collection(dropCollectionName);
  try {
    const res = await collection.drop();
    console.log(`Successfully dropped collection ${dropCollectionName}`);
  } catch (err) {
    console.error(err);
  }
};
module.exports.dropCollection = dropCollection;
