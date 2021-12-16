const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://ryanjcorrigan:wc3z6ZMzx7E8JRp!@cluster0.v1pl6.mongodb.net/bincon?retryWrites=true&w=majority"
const client = new MongoClient(uri)


module.exports.listEverything = async function listDB() {
  try {
    await client.connect()
    const dbList = await client.db().admin().listDatabases()
    console.log("DB: ")
    dbList.databases.forEach( db => {
      console.log(`- ${db.name}`)
    })
  } catch(e) {
    console.error(e)
  } finally {
    await client.close()
  }
}


module.exports.listDatabases = async function listDatabases(client) {
    try {
        await client.connect()
        const db = client.db('sample_airbnb')
        databasesList = await client.db().admin().listDatabases();
        
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
      } catch(e) {
        console.error(e)
      } finally {
        await client.close()
      }
    }
    

module.exports.loadAllData = async function loadAllTeams() {
    try {
        await client.connect()
        const db = client.db('numbers')
        const sample = db.collection('bincon')
        const info = await sample.find().toArray()
        return info

      } catch(e) {
        console.error(e)
      } finally {
        await client.close()
      }
    }

module.exports.loadNumbers= async function loadMetaData() {
        try {
          await client.connect()
          const db = client.db('numbers')
          const metatable = db.collection('bincon')
          const query = {name: "numberlist"}
          var team = await metatable.findOne(query);
          //var team = JSON.stringify(team);
          //var team = team.split(",");
          //team = team[1];
          return team 
        } catch(e) {
          console.error(e)
        } finally {
          await client.close()
        }
      }

      module.exports.loadBinary= async function loadBinary() {
        try {
          await client.connect()
          const db = client.db('numbers')
          const metatable = db.collection('bincon')
          const query = {name: "numberlist"}
          var team = await metatable.findOne(query);
          //var team = JSON.stringify(team);
          //var team = team.split(",");
          //team = team[1];
          return team 
        } catch(e) {
          console.error(e)
        } finally {
          await client.close()
        }
      }



module.exports.insertNumber = async function insertNumber(number1, number2) {
    await client.connect()
    const db = client.db('numbers')
    db.collection("bincon").updateOne({name: "numberlist"}, { $push: {numbers: number1}})
    db.collection("bincon").updateOne({name: "numberlist"}, { $push: {binary: number2}})
      
}