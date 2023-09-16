import express from "express";
import MembersCtrl from "./members.controller.js";

const router = express.Router();

router.route("/").post(MembersCtrl.apiAddMembers);
router.route("/").get((req, res) => {
  res.send('Hello Express app!');
});

export default router;
