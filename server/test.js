import mongodb from 'mongodb'
const {MongoClient  } = mongodb;

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';
const insertC = (collection)=>{
  collection.insert({c:1})
}
const main = async ()=>{
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('test1')
  insertC(collection)
  const res = await collection.find({b:1}).toArray();
  console.log(res);
}
main()