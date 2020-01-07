const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "TeamsDB";

// Create a new MongoClient
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("docs");
  // Insert some documents
  collection.insertMany(
    [
      {
        key: "chelsea",
        name: "Chelsea FC",
        code: "CHE"
      },
      {
        key: "arsenal",
        name: "Arsenal FC",
        code: "ARS"
      },
      {
        key: "tottenham",
        name: "Tottenham Hotspur FC",
        code: "TOT"
      },
      {
        key: "westham",
        name: "West Ham United FC",
        code: "WHU"
      },
      {
        key: "crystalpalace",
        name: "Crystal Palace FC",
        code: "CRY"
      },
      {
        key: "manutd",
        name: "Manchester United FC",
        code: "MUN"
      },
      {
        key: "mancity",
        name: "Manchester City FC",
        code: "MCI"
      },
      {
        key: "everton",
        name: "Everton FC",
        code: "EVE"
      },
      {
        key: "liverpool",
        name: "Liverpool FC",
        code: "LIV"
      },
      {
        key: "newcastle",
        name: "Newcastle United FC",
        code: "NEW"
      },
      {
        key: "astonvilla",
        name: "Aston Villa FC",
        code: "AVL"
      },
      {
        key: "southampton",
        name: "Southampton FC",
        code: "SOU"
      },
      {
        key: "leicester",
        name: "Leicester City FC",
        code: "LEI"
      },
      {
        key: "bournemouth",
        name: "AFC Bournemouth",
        code: "BOU"
      },
      {
        key: "norwich",
        name: "Norwich City FC",
        code: "NOR"
      },
      {
        key: "watford",
        name: "Watford FC",
        code: "WAT"
      },
      {
        key: "burnley",
        name: "Burnley FC",
        code: "BUR"
      },
      {
        key: "brightonhovealbionfc",
        name: "Brighton & Hove Albion FC",
        code: null
      },
      {
        key: "sheffieldunitedfc",
        name: "Sheffield United FC",
        code: null
      },
      {
        key: "wolverhamptonwanderersfc",
        name: "Wolverhampton Wanderers FC",
        code: null
      }
    ],
    function(err, result) {
      assert.equal(err, null);
      assert.equal(20, result.result.n);
      assert.equal(20, result.ops.length);
      console.log("Inserted 20 documents into the collection");
      callback(result);
    }
  );
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("docs");
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
