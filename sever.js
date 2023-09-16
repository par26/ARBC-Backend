import express from "express"
import cors from "cors";
import members from "/api/members.route.js"


const app = express()


app.use(cors())
app.use(express.json())


app.use("api/v1/members", members)
app.use("*", (res, req) => res.status(404).json({error: "Not valid request/url"}))


export default app