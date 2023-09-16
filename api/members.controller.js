export default class MembersController {
  static async apiPostMember(req, res, next) {
    try {
      
      const schoolName = req.body.schoolName;
      const title = req.body.title;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const grade = req.body.grade;
      const email = req.body.email;
      const password = req.body.password;
      const city = req.body.city;
      
      const memberResponse = await MembersDAO.addMember(
        schoolName,
        firstName,
        lastName, 
        grade, 
        email, 
        password, 
        city
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }


  
}