var FCM = require('fcm-node')
var serverKey = require('../config/privatekey.json')
var fcm = new FCM(serverKey)


exports.sendNotificationToClient = function(to,title,body) {
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: to, 
        
        notification: {
            title: title, 
            body: body,
        
        },
        
    }
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log(err);
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })
}