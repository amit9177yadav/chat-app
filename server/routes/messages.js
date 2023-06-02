  const { addMessage, getMessages } = require("../controllers/messageController");
   const router = require("express").Router();

 router.post("/addmsg/", addMessage);
   router.post("/getmsg/", getMessages);
//export const receiveMessageRoute = "/api/receive-message";
 module.exports = router;
