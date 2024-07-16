const fetch = require("node-fetch")

exports.handler = async (event,context) => {

  const eventData = JSON.parse(event.body)
  
  const accessToken = 'EAA1IQyS0aOABOw7TTASv5vzdFiwv1PZCC5u9M0815rAF1AEosaEovY5XGOiDZBra4pUnAwmGoQ3GxdVBB3p287Xje6dv9pgwQf7Btsz0PYcLXpjk2BPib48aTmMixGn3HMlSfV2jG7fx7Ywsbsnk8ZCAZBkg933s8TCG1ixMPkP7ZABUMM6oa72b6rZCsQuB3t';
  let current_timestamp = Math.floor(new Date() / 1000);
  
  const myIP = event.headers['x-nf-client-connection-ip'] 
  
  let obj = null
  switch(eventData.type){
    case "whatsapp":
        obj =  {
         "event_name": "Contact",
         "event_time": current_timestamp,
         "user_data": {
            "client_ip_address": myIP,
            "client_user_agent": event.headers['user-agent']
         },
         "opt_out": false
      }
    break;
  }

  // return {
  //   statusCode:200,
  //   body: JSON.stringify({message: `gaa`})
  // }mtnwmwvsmwvzw


  const response = await fetch('https://graph.facebook.com/v20.0/1430985167621653/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [obj],
      access_token: accessToken,
    }),
  });

  try{

  const result = await response.json();

    return {
    statusCode:200,
    body: JSON.stringify({message: `gaa`})
  }

  }

  catch{
    return {
      statusCode: 400
    }

  }
  
}
