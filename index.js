import app from "./server.js"
import mongodb from "mongodb"
import MembersDAO from "./dao/memberDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = 'arbcsoutherncal'
const mongo_password = 'losososnumber1'
const uri = `mongodb+srv://arbcsoutherncal:${mongo_password}@registration.axuxdls.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await MembersDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })