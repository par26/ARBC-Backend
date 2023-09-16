import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let members

export default class MembersDAO {
  static async injectDB(conn) {
    if (members) {
      return
    }
    try {
      members = await conn.db("members").collection("members")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addMember(schoolName,firstName,lastName, grade, email, password, city) {
    try {
      const memberDoc = {
        schoolName: schoolName,
        firstName: firstName,
        lastName: lastName,
        grade: grade,
        email: email,
        password: password,
        city: city,
      }
      console.log("adding")
      return await members.insertOne(memberDoc)
    } catch (e) {
      console.error(`Unable to post member: ${e}`)
      return { error: e }
    }
  }
 

}