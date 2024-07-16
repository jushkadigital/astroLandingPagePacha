const axios = require("axios")


exports.handler = async (event,context) => {

  // const data = JSON.parse(event.body)
  
  const url = 'https://graph.facebook.com/v12.0/{PIXEL_ID}/events';
  // const accessToken = process.env.META_ACCESS_TOKEN;
  
  console.log("GAA")
  console.log(event.headers['client-ip'])
  
  return {
    statusCode:200,
    body: JSON.stringify({message: `gaa`})
  }


  // const response = await fetch('https://graph.facebook.com/v11.0/YOUR_PIXEL_ID/events', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     data: [eventData],
  //     access_token: accessToken,
  //   }),
  // });

  // try{

  // const result = await response.json();

  //   return {
  //   statusCode:200,
  //   body: JSON.stringify({message: `gaa`})
  // }

  // }
  // 
  // catch{
  //   return {
  //     statusCode: 400
  //   }

  // }
  
}
