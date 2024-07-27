const fetch = require("node-fetch")


exports.handler = async (event,context) => {

  const eventData = JSON.parse(event.body)
  
  const accessToken = 'EAAj4x7ZAOGoQBO0LW0B1Xc4DqeGZCLZCONTZAT0Xs4bL4HD2L5ZCsSQntfxgLtxsHZBZCkcXXL32KT5EH0kXvDbuahBz4ZBuuyr2gwulGghVaqDuWr3APulmiriCxCXc0Tb8ZBLZCEAe0oacXj0NRxH0ZCvUxYpryQoUe2187aNRzeKdTZCs7bBzzQH4LHmBMZAsZC3EzLWAZDZD';
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


  
  try{
  const response = await fetch('https://graph.facebook.com/v20.0/1430985167621653/events?access_token='+accessToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [obj],
    }),
  });

    console.log(response)
  const result = await response.json();

    return {
    statusCode:200,
    body: JSON.stringify({message: result})
  }

  }

  catch{
    return {
      statusCode: 400
    }

  }
  
}
