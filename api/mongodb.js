const MongoClient = require('mongodb').MongoClient;
const url = require('url');
// Create cached connection variable
let cachedDb = null;

async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  return db;
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI);
  // const db = await connectToDatabase(uri)

  // Select the "items" collection
  const collection = await db.collection('items');

  // Query the "items" collection
  const items = await collection.find({}).toArray();

  // Respond with a JSON string of all users in the collection
  res.status(200).json({ items });
};
