const fetch = require("node-fetch")


exports.handler = async (event,context) => {

  const eventData = JSON.parse(event.body)
  
  const accessToken = 'EAAj4x7ZAOGoQBOZBqRDEXuYzah5ZCq6DbxbJZAMHul4i5FA4fm2hDCaalLz3EZB6WOZBdQGes7c6sAZAlp9O0KDgnxTrwDoK7ETahZAqa7gnHPzwYqF4IFk8ZASqoC82TjKk6wk6zNOv7kdR39ZCHhkJhue7WFwbDFcZATpMQfKfriZBDLcDFmsgZCIPkJFhZAY8gSp1l2iQZDZD';
  let current_timestamp = Math.floor(new Date() / 1000);
  
  const myIP = event.headers['x-nf-client-connection-ip'] 
  
  let obj = null
  console.log(eventData.type)
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


  console.log(obj)
  
  try{
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
