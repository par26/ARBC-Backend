import express from "express"
import MembersCtrl from "./members.controller.js"

const router = express.Router()

router.route("/new").post(MembersCtrl.apiAddMembers)

export default router