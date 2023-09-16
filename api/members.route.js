import express from "express"
import MembersCtrl from "./members.controller.js"

const router = express.Router()

router.route("/new").post(MembersCtrl.apiAddMembers)
router.route("/new").get((req, res) => res.status(500).json({ error: "Poggers I think we're getting somewhere" }))

export default router
